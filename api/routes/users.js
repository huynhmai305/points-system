var express = require('express');
var router = express.Router();
const User = require('../models/user');
const Bill = require('../models/bill')

/* GET users listing. */
router.get('/profile', (req, res, next) => {
  User.findOne({
    where: {
      username: req.query.name
    }
  })
  .then(result => {
    res.sendStatus(200).send(result)
    console.log(result)
  })
  .catch( err => res.json({
    msg: 'Không tìm thấy người dùng'
  }))
});

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
