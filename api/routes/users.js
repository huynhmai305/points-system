var express = require('express');
var router = express.Router();
const User = require('../models/user');
const Bill = require('../models/bill')

/* GET users listing. */
router.get('/', (req, res, next) => {
  sess = sessionStorage.getItem('name');
  sess ? res.render('customer/home',{name:sess}): res.send('fail')
});
router.get('/profile', (req, res, next) => {
  sess = sessionStorage.getItem('name');
  User.findAll({
    attributes: ['id','username','address','phone','email','password','picture'],
    where: {
      username: sess
    }
  })
  .then(result => {
    res.sendStatus(200).render('customer/profile',{result})
  })
  .catch( err => console.log(err))
});

router.post('/tichdiem',(req,res) => {
  Bill.findAll({
    where: {
      mahoadon: {
        [Op.like]: `'%$'${req.body.mahoadon}'%'`
      }
    }
  })
  .then(result => res.send(result))
})
router.get('/tichdiem',(req,res)=>{
 Bill.findAll().then(result => res.send(result))
})

module.exports = router;
