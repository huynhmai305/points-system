var express = require('express');
var router = express.Router();
// import jwt from 'jsonwebtoken';
const User = require ('../models/user');
const Bill =require ('../models/bill');
const Gift = require ('../models/gift') ;
const Exchange_Gift = require ('../models/exchange_gift');
const Point = require ('../models/point');
const sequelize = require('sequelize');
const Op = sequelize.Op;
User.hasMany(Bill,{foreignKey:'id_user',sourceKey:'id'});
Bill.belongsTo(User,{foreignKey:'id_user'});

User.hasMany(Gift,{foreignKey:'id_store',sourceKey:'id'});
Gift.belongsTo(User,{foreignKey:'id_store'});

User.hasMany(Exchange_Gift,{foreignKey:'id_user',sourceKey:'id'});
Exchange_Gift.belongsTo(User,{foreignKey:'id_user'});
Gift.hasMany(Exchange_Gift,{foreignKey:'id_gift',sourceKey:'id_gift'});
Exchange_Gift.belongsTo(Gift,{foreignKey:'id_gift'});

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
      order: [['id','ASC']],
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
      }],
      order: [['id','ASC']]
    })
      .then(result => {
        res.send(result);
      })
      .catch(err => console.log(err))
  }
})//end--get bill 

// get all (info, bill) with id customer
router.get('/bill/:id_user', (req, res) => {
    Bill.findAll({
      where:{
        id_user: req.params.id_user
      },
      include: [User],
      order:[['createdAt','DESC']]
    })
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err))
})//end--get all bill with id customer

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
        id_store: {
          [Op.like]: `%${req.query.keyword}%`
        }
      },
      order:[['createdAt','DESC']]
    })
      .then(result => {
        res.send(result);
      })
      .catch(err => console.log(err))
  } else {
    Gift.findAll({
      order:[['createdAt','DESC']]
    })
      .then(result => {
        res.send(result);
      })
      .catch(err => console.log(err))
  }
})

//get gift with id_user
router.get('/giftuser/:id', (req, res) => {
    Exchange_Gift.findAll({
      where: {
        id_user:req.params.id
      },
      include:[Gift],
      order:[['createdAt','DESC']]
    })
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err))
})

//get gift with id_store
router.get('/giftstore/:id_store',(req,res)=>{
  Gift.findAll({
    where:{
      id_store: req.params.id_store
    }
  })
  .then(result => res.send(result))
})

//get gift with point condition for exchange point
router.get('/giftpoint/:point', (req,res) => {
  Gift.findAll({
    where:{
      point: {
        [Op.lte]:req.params.point 
      }
    }
  })
  .then(result => res.send(JSON.stringify(result)))
  .catch(err => console.log(err))
})

//add gift
router.post('/gift',(req, res) => {
  const data = {
    id_gift:req.body.id_gift,
    title: req.body.title,
    content: req.body.content,
    point: req.body.point,
    id_store: req.body.id_store,
    quantity: req.body.quantity
  };
  let { id_gift,title, content, point, id_store, quantity } = data;
  
  Gift.create({id_gift, title, content, point, id_store, quantity })
  .then(result => {
    console.log(result)
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

//====update gift
router.put('/gift', (req, res) => {
  const update = new Date();
  var dt = {
    title: req.body.title,
    content: req.body.content,
    point: req.body.point,
    id_store: req.body.id_store,
    quantity: req.body.quantity,
    updatedAt: update
  }
    Gift.update(dt, { where: { id: req.body.id } })
      .then(result => {
        res.json(result);
        res.sendStatus(200);
      })
      .catch(err => console.log(err))
})

//create exchange_gift history after exchange gift
router.post('/exchange_gift',(req,res) => {
 let data = {
    id_user: req.body.id_user,
    id_gift: req.body.id_gift
  }
  let { id_user, id_gift} = data;
  console.log({ id_user, id_gift})
  Exchange_Gift.create({id_user, id_gift })
  .then(result => {
    console.log(result)
    res.json(result);
    res.sendStatus(200);
  })
  .catch(err => {
    res.send('error:' + err)
  })
})

//get history exchange gift
router.get('/exchange_gift',(req,res) => {
  Exchange_Gift.findAll({
    include: [Gift]
  })
  .then(result => res.send(result))
})

//get point_change
router.get('/point_change',(req,res) => {
  Point.findOne({
    attributes: ['point_change']
  })
  .then(result => res.send(result))
})

//update point_change
router.put('/point_change',(req,res) => {
  const update = new Date();
  let dt = {
    point_change: req.body.point_change,
    updatedAt: update
  }
  Point.update(dt,{
    where: {
      id: 1
    }
  })
  .then(result => res.sendStatus(200).send(result))
  .catch(err => res.send('error'))
})

//get store select option
router.get('/optionstore',(req,res) => {
  User.findAll({
    attributes:['id','username'],
    where:{
      role: 1
    }
  })
  .then(result => res.send(result))
})

module.exports = router;