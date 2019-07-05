var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Bill = require('../models/bill');

/* GET users listing. */
router.get('/profile', (req, res, next) => {
  
  console.log(req.session)
  // User.findOne({
  //   where: {
  //     username: req.session.name
  //   }
  // })
  // .then(result => {
  //   res.sendStatus(200).send(result)
  //   console.log(result)
  // })
  // .catch( err => res.json({
  //   msg: 'Không tìm thấy người dùng'
  // }))
});

router.post('/tichdiem',(req,res) => {
  Bill.findAll({
    where: {
      mahoadon: {
        [Op.like]: `%${req.body.mahoadon}%`
      }
    }
  })
  .then(result => res.send(result))
})
router.get('/tichdiem',(req,res)=>{
 Bill.findAll().then(result => res.send(result))
})

module.exports = router;
