var express = require('express');
var router = express.Router();
const User = require('../models/user')

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

module.exports = router;
