var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Bill = require('../models/bill');
const sequelize = require('sequelize');
const Op = sequelize.Op;

/* GET users listing. */

router.get('/tichdiem',(req,res) => {
<<<<<<< HEAD
  Bill.findOne({
    where:{
      id: req.query.keyword
    },
    // attributes: ['total']
  }
   )
  .then(result => {
    res.send(result);
    console.log(result)
  })
=======
  Bill.findAll({
    where: {
      mahoadon: req.query.keyword
    }
  })
  .then(result => res.send(result))
})
router.post('/store/bill',(req,res)=>{
 Bill.findAll({
  where: {
    id_store:req.body.id
  }
 })
 .then(result => res.send(result))
>>>>>>> aecd1c2d41d6ecb31dadae6a64eeb5913d18697e
})

module.exports = router;
