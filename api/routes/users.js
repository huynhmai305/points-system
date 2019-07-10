var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Bill = require('../models/bill');
const Gift = require('../models/gift');
const sequelize = require('sequelize');
const Op = sequelize.Op;
User.hasMany(Bill,{foreignKey:'id_user',sourceKey:'id'});
Bill.belongsTo(User,{foreignKey:'id_user'});

User.hasMany(Gift,{foreignKey:'id_store',sourceKey:'id'});
Gift.belongsTo(User,{foreignKey:'id_store'});

router.get('/test',(req,res)=>{
  User.findAll({
    include:[Bill]
  })
  .then(rs => res.send(rs))
})
//tim kiem ma hoa don
router.get('/tichdiem',(req,res) => {
  Bill.findOne({
    where:{
      id: req.query.keyword
    },
    // attributes: ['total'],
  })
  .then(result => {
    res.send(result);
    console.log(result)
  })
})
//==end search

//update point
router.put('/point', (req, res) => {
  const update = new Date();
  var dt = {
    point: req.body.point,
    updatedAt: update
  }
  console.log(dt.point)
    User.update(dt, { where: { id: req.body.id } })
      .then(result => {
        res.json(result);
        res.sendStatus(200);
      })
      .catch(err => console.log(err))
  })

//===end update point

//get bill
router.get('/bill', (req, res) => {
  if (req.query.keyword && req.query.keyword.length > 0) {
    Bill.findAll({
      where: {
        id: {
          [Op.like]: `%${req.query.keyword}%`
        }
      },
      order: ['id'],
      include: [{
        model: User,
        attributes: ['username']
      }]
    })
      .then(result => {
        res.send(result);
      })
      .catch(err => console.log(err))
  } else {
    Bill.findAll({
      include: [{
        model: User,
        attributes: ['username']
      }]
    })
      .then(result => {
        res.send(result);
      })
      .catch(err => console.log(err))
  }
})//end--get bill 

// get all (info, bill) with id customer
router.get('/bill/:id_user', (req, res) => {
  if (req.query.keyword && req.query.keyword.length > 0) {
    Bill.findAll({
      where: {   
        id: {
          [Op.like]: `%${req.query.keyword}%`,
          // [Op.and]:{id:req.params.id_user}
        },
        id_user: req.params.id_user
      },
      order: ['id'],
      include: [User]
    })
      .then(result => {
        res.send(result);
      })
      .catch(err => console.log(err))
  } else {
    Bill.findAll({
      where:{
        id_user: req.params.id_user
      },
      include: [User]
    })
      .then(result => {
        res.send(result);
      })
      .catch(err => console.log(err))
  }
})//end--get bill with id customer

//add bill
router.post('/bill',(req, res) => {
  const data = {
    id: req.body.id,
    total: req.body.total,
    id_user: req.body.id_user
  };
  let { id, total, id_user } = data;
  Bill.create({id, total, id_user})
  .then(result => {
    res.json(result);
    res.sendStatus(200);
  })
  .catch(err => {
    res.send('error:' + err)
  })
})
//==end add bill

//get gift
router.get('/gift', (req, res) => {
  if (req.query.keyword && req.query.keyword.length > 0) {
    Gift.findAll({
      where: {
        username: {
          [Op.like]: `%${req.query.keyword}%`
        }
      }
    })
      .then(result => {
        res.send(result);
      })
      .catch(err => console.log(err))
  } else {
    User.findAll()
      .then(result => {
        res.send(result);
      })
      .catch(err => console.log(err))
  }
})
//get gift with id_store
router.get('/gift/:id', (req, res) => {
  if (req.query.keyword && req.query.keyword.length > 0) {
    Gift.findAll({
      where: {
        id_store: req.params.id,
        username: {
          [Op.like]: `%${req.query.keyword}%`
        }
      }
    })
      .then(result => {
        res.send(result);
      })
      .catch(err => console.log(err))
  } else {
    User.findAll()
      .then(result => {
        res.send(result);
      })
      .catch(err => console.log(err))
  }
})

//add gift
router.post('/gift',(req, res) => {
  const data = {
    id_gift: '',
    title: req.body.id,
    content: req.body.total,
    point: req.body.point,
    id_store: req.body.id_store
  };
  let { id_gift,title, content, point, id_store } = data;
  Gift.create({id_gift, title, content, point, id_store })
  .then(result => {
    res.json(result);
    res.sendStatus(200);
  })
  .catch(err => {
    res.send('error:' + err)
  })
})

//delete gift
router.delete('/gift', (req, res) => {
  const { id } = req.body
  Gift.destroy({
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
//====edit gift
router.put('/gift', (req, res) => {
  const update = new Date();
  var dt = {
    title: req.body.title,
    content: req.body.content,
    point: req.body.point,
    id_store: req.body.id_store,
    updatedAt: update
  }
    Gift.update(dt, { where: { id: req.body.id } })
      .then(result => {
        res.json(result);
        res.sendStatus(200);
      })
      .catch(err => console.log(err))
})


module.exports = router;
