const express = require('express');
const router = express.Router();
const User = require('../models/user');
const cors = require('cors');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

router.use(cors())
process.env.SECRET_KEY = 'secret'

 //======register ======
 router.post('/admin/user',(req,res) =>{
  const data = {
    username: req.body.username,
    birthday: req.body.birthday,
    address: req.body.address,
    phone:req.body.phone,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  };
  User.findOne({
    where: {
      email: data.email
    }
  })
  .then( user => {
    // console.log(user)
    if(!user){
        bcrypt.hash(data.password,10,(err,hash) => {
            data.password = hash;
           let { username, birthday, address, phone, email,password,role} = data;
            //console.log(data.password)
            //insert into table
            User.create({ username,birthday,address,phone,email,password,role})
            .then( result => {
              res.json(result);
              res.sendStatus(200);
            })
            .catch(err => {
                res.send('error:' +err)
            })
        })
    } else {
        res.json({error: 'User already exists'})
    }
  })
  .catch(err => {
    res.send('error:'+ err)
  })
 
})
//end register=======

//===== login page

router.post('/login',(req,res) =>{
  var email = req.body.email;
  var pw = req.body.password;
  
  if(email=='admin123@gmail.com' && pw=='123456789'){
    return res.send({"role": 0})
  }
  else {
    User.findAll({
      where: {
        email: email
      },
      attributes: ['role','username','password']
    })
    .then( result => {
        bcrypt.compare(pw,result[0].password,(err,hash)=>{
          if(hash===true){
            return res.end(JSON.stringify(result))  
          }
        })
      }
    )
  //   .catch(err => {
  //     console.log(err)
  // })
} 
})
 //end login======== 

//======get user
router.get('/admin/user',(req,res) => {
  User.findAll({
    where: {role: 2},
    order:['id']
  })
  .then(result => {
    res.send(result);
    
  })
  .catch(err => console.log(err))
})
//get store
router.get('/admin/store',(req,res) => {
  User.findAll({
    where: {role: 1},
    order:['id']
  })
  .then(result => {
    res.send(result);
    
  })
  .catch(err => console.log(err))
})
//delete user
router.delete('/admin/user', (req,res) => {
  const { id } = req.body
  //delete from table
    User.destroy({
        where: {
          id: id
        }
      })
      .then(result => {
        res.json({delete: 'true'});
        res.sendStatus(200)
      })
      .catch(err => console.log(err))
})
//====edit user
router.put('/admin/user',(req,res) => {
  const update=new Date();
  var dt = {
    username: req.body.username,
    birthday: req.body.birthday,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
    createdAt: update
    
  };
  bcrypt.hash(dt.password,10,(err,hash) => {
    dt.password = hash;
    User.update ( dt,{ where: {id: req.body.id}} ) 
    .then (result => {
      res.json(result);
      res.sendStatus(200);
    }) 
    .catch (err => console.log(err)) 
    console.log(dt)
   })
})
  
//===end edit user


module.exports = router;
