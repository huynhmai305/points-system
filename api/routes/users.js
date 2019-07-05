var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Bill = require('../models/bill');
const sequelize = require('sequelize');
const Op = sequelize.Op;

/* GET users listing. */

router.get('/tichdiem',(req,res) => {
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
})

module.exports = router;
