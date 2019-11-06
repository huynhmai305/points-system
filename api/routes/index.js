const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Bill = require('../models/bill');
const Province = require('../models/province');
const District = require('../models/district');
const Ward = require('../models/ward');
const Village = require('../models/village')
const cors = require('cors');
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const sequelize = require('sequelize');
const Op = sequelize.Op;
router.use(cors());
process.env.SECRET_KEY = 'secret';
const multer = require('multer')
const localvn = require('../localVN.json')
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
});
const upload = multer({ storage })

Province.hasMany(District, { foreignKey: 'provinceid', sourceKey: 'provinceid' });
District.belongsTo(Province, { foreignKey: 'provinceid', targetKey: 'provinceid' });

District.hasMany(Ward, { foreignKey: 'districtid', sourceKey: 'districtid' });
Ward.belongsTo(District, { foreignKey: 'districtid', targetKey: 'districtid' });

Ward.hasMany(Village, { foreignKey: 'wardid', sourceKey: 'wardid' });
Village.belongsTo(Ward, { foreignKey: 'wardid', targetKey: 'wardid' });

router.get('/province', (req, res) => {
  Province.findAll({
    attributes: ['provinceid', 'name']
  })
    .then(data => res.send(data))
})
router.get('/district/:province', (req, res) => {
  Province.findAll({
    where: {
      provinceid: req.params.province
    },
    include: [District]
  })
    .then(data => res.send(data))
})
router.get('/ward/:district', (req, res) => {
  District.findAll({
    where: {
      districtid: req.params.district
    },
    include: [Ward]
  })
    .then(data => res.send(data))
})
router.get('/village/:ward', (req, res) => {
  Ward.findAll({
    where: {
      wardid: req.params.ward
    },
    include: [Village]
  })
    .then(data => res.send(data))
})
//upload images
router.post('/upload', upload.single('image'), (req, res) => {
  if (req.file)
    res.json({
      imageUrl: `images/uploads/${req.file.filename}`
    });
  else
    res.status("409").json("No Files to Upload.");
});

//======register ======
router.post('/admin/user', (req, res) => {
  const data = {
    username: req.body.username,
    birthday: req.body.birthday,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    // picture: finalImg
  };
  User.findOne({
    where: {
      email: data.email
    }
  })
    .then(user => {
      // console.log(user)
      if (!user) {
        bcrypt.hash(data.password, 10, (err, hash) => {
          data.password = hash;
          let { username, birthday, address, phone, email, password, role } = data;
          //console.log(data.password)
          //insert into table
          User.create({ username, birthday, address, phone, email, password, role })
            .then(result => {
              res.json(result);
              res.sendStatus(200);
            })
            .catch(err => {
              res.send('error:' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error:' + err)
    })

})
//end register=======

//send mail qr
router.post('/sendmail', (req, res) => {
  const option = {
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  };
  const email = req.body.email
  const html = req.body.messageHtml
  const content = req.body.content
  console.log(content)
  const transporter = nodemailer.createTransport(option);
  transporter.verify(function (error, success) {
    // Nếu có lỗi.
    if (error) {
      console.log(error);
    } else { //Nếu thành công.
      console.log('Kết nối thành công!');
      var mail = {
        from: process.env.MAIL_USER,
        to: email,
        subject: 'Thông báo từ hệ thống tích điểm H&M!', // Tiêu đề mail
        text: 'Thành công, chúc mừng !!', // Nội dung mail dạng text
        // HTML body
        html: html,
        // Ds tệp đính kèm
        attachments: [
          // String attachment
          {
            filename: 'qr.png',//file qr here
            contentType:  'image/png',
            path: content
          }
        ]
      };
      //Tiến hành gửi email
      transporter.sendMail(mail, function (error, info) {
        if (error) { // nếu có lỗi
          console.log(error);
        } else { //nếu thành công
          console.log('Email sent: ' + info.response);
          res.sendStatus(200)
        }
      });
    }
  });
})
//== end send mail

//===== login page
router.post('/login', (req, res) => {
  // var sess = req.session;
  var email = req.body.email;
  var pw = req.body.password;
  User.findAll({
    where: {
      email: email
    },
    // attributes: ['role', 'username', 'password']
  })
    .then(result => {
      // console.log(result[0].password)
      bcrypt.compare(pw, result[0].password, (err, hash) => {
        // console.log(hash)
        if (hash === true) {
          res.send(JSON.stringify(result));
        }
        else {
          res.json({ msg: "Khong tim thay tai khoan" })
        }
      })
    })
    .catch(err => console.log(err))
})
//end login======== 

//======get user
router.get('/admin/user', (req, res) => {
  if (req.query.keyword && req.query.keyword.length > 0) {
    User.findAll({
      where: {
        role: 2,
        [Op.or]: [
          {
            username: {
              [Op.like]: `%${req.query.keyword}%`
            }
          },
          {
            email: {
              [Op.like]: `%${req.query.keyword}%`
            }
          }
        ]
        
      },
      order: ['id']
    })
      .then(result => {
        res.send(result);
      })
      .catch(err => console.log(err))
  } else {
    User.findAll({
      where: {
        role: 2
      },
      order: ['id']
    })
      .then(result => {
        res.send(result);
      })
      .catch(err => console.log(err))
  }
})
//get info with id
router.get('/getinfo/:id', (req, res) => {
  User.findAll({
    where: {
      id: req.params.id
    }
  })
    .then(result => res.send(result))
})

//get store
router.get('/admin/store', (req, res) => {
  if (req.query.keyword && req.query.keyword.length > 0) {
    User.findAll({
      where: {
        role: 1,
        username: {
          [Op.like]: `%${req.query.keyword}%`
        }
      },
      order: ['id']
    })
      .then(result => {
        res.send(result);
      })
      .catch(err => console.log(err))
  } else {
    User.findAll({
      where: {
        role: 1
      },
      order: ['id']
    })
      .then(result => {
        res.send(result);
      })
      .catch(err => console.log(err))
  }

})
//delete user
router.delete('/admin/user', (req, res) => {
  const { id } = req.body
  //delete from table
  User.destroy({
    where: {
      id: id
    }
  })
    .then(result => {
      res.json({ delete: 'true' });
      res.sendStatus(200)
    })
    .catch(err => console.log(err))
})
//====edit user
router.put('/admin/user', (req, res) => {
  const update = new Date();
  var dt = {
    username: req.body.username,
    birthday: req.body.birthday,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
    updatedAt: update,
    point: req.body.point,
    picture: req.body.picture
  }
  bcrypt.hash(dt.password, 10, (err, hash) => {
    dt.password = hash;
    User.update(dt, { where: { id: req.body.id } })
      .then(result => {
        res.json(result);
        res.sendStatus(200);
      })
      .catch(err => console.log(err))
  })
})
//===end edit user

//sum total money of store
router.get('/totalmoney/:id_store', (req, res) => {
  Bill.findAll({
    where: {
      id_store: req.params.id_store
    },
    attributes: ['id_store', [sequelize.fn('SUM', sequelize.col('total')), 'total_money']],
    group: ['id_store']
  })
    .then(result => {
      res.end(JSON.stringify(result));
    })
    .catch(err => console.log(err))
})//===end get total money of store

//sum all total money of store
router.get('/alltotalmoney', (req, res) => {
  Bill.findAll({
    attributes: [[sequelize.fn('SUM', sequelize.col('total')), 'total_money']],
  })
    .then(result => {
      res.end(JSON.stringify(result));
    })
    .catch(err => console.log(err))
})//===end get all total money of store

//count members
router.get('/countmembers', (req, res) => {
  User.findAll({
    where: {
      role: 2
    },
    attributes: ['role', [sequelize.fn('COUNT', sequelize.col('role')), 'total_members']],
    group: ['role']
  })
    .then(result => res.send(result))
    .catch(err => console.log(err))
})

//count bill
router.get('/countbills', (req, res) => {
  Bill.findAll({
    attributes: [[sequelize.fn('COUNT', sequelize.col('id')), 'total_bills']],
  })
    .then(result => res.send(result))
    .catch(err => console.log(err))
})


module.exports = router;
