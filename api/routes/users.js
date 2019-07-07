var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Bill = require('../models/bill');
const sequelize = require('sequelize');
const Op = sequelize.Op;

/* GET users listing. */

router.get('/tichdiem',(req,res) => {
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
})


module.exports = router;
