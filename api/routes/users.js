var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Bill = require('../models/bill');
const sequelize = require('sequelize');
const Op = sequelize.Op;
User.hasMany(Bill,{foreignKey:'id_store',sourceKey:'id'})
Bill.belongsTo(User,{foreignKey:'id_store'})

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
    // attributes: ['total']
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

//===end edit user

//get bill
router.get('/bill', (req, res) => {
  if (req.query.keyword && req.query.keyword.length > 0) {
    Bill.findAll({
      where: {
        id: {
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
    Bill.findAll()
      .then(result => {
        res.send(result);
      })
      .catch(err => console.log(err))
  }

})
//add bill
router.post('/bill',(req, res) => {
  const data = {
    id: req.body.id,
    total: req.body.total,
    id_store: req.body.id_store
  };
  let { id, total, id_store } = data;
  Bill.create({id, total, id_store})
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
router.get('/gift', (req, res) => {
  if (req.query.keyword && req.query.keyword.length > 0) {
    Gift.findAll({
      where: {
        id_store: req.params.id_store,
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

module.exports = router;
