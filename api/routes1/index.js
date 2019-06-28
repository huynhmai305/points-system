const express = require('express');
const router = express.Router();
const User = require('../models/user');
const cors = require('cors');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

router.use(cors())
process.env.SECRET_KEY = 'secret'

router.get('/', (req, res) => res.send('hello world'))

//===== login
router.post('/login',(req,res) =>{
  var email = req.body.email;
  var pw = req.body.password;
  // console.log(email+pw)
  if(email=='admin123@gmail.com' && pw=='123456789'){
    res.send('success');
  }
  // else {
  //   pool.query('select "username", "role" from "User" where "email"=$1 ',[email])
  //   .then( result => {
  //     console.log(result)
  //     // if(result){
  //     //     if(bcrypt.compare(pw,result.password)){
  //     //         console.log(result[0].role)
  //     //         var rs=result[0].role;
  //     //         if(rs===1){  
  //     //           res.redirect('store')
  //     //         }
  //     //         else if(rs===2){
  //     //           res.redirect('users')
  //     //         }
  //     //         sess = req.session;
  //     //         sess.name = result[0].username;
  //     //         req.session.save();
  //     //         console.log(sess.name);
  //     //     } else {
  //     //         res.json({error: 'User does not exist'})
  //     //     }
  //     // } else {
  //     //     res.send({error: 'User does not exist'})
  //     // }
  //   })
  //   .catch(err => {
  //       res.send('User does not exist')
  //   })
  //}
})
 //end login======== 
//get list user
router.get('/admin/user', (req, res) => {
  pool.query('select * from "Users" ')
      .then(items => {
          res.send(items.rows)
      })
      .catch(err => res.status(400).json({dbError: 'db error'}))
})
//add user
router.post('/admin/user', (req, res) => {
  const create=new Date();
  const { username, birthday, address, phone, email, password, role } = req.body;
  console.log(req.body)
    pool.query('INSERT INTO "Users"( "username", "birthday", "address", "phone", "email", "password", "role","createdAt") VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',[username, birthday, address, phone, email, password, role, create])
      .then(item => {
       console.log(item.rows)
      })
      .catch(err => console.log(err))
   
})
//edit user
router.put('/admin/user', (req, res) => {
  const update=new Date();
  const { id, username, birthday, address, phone, email, password, role } = req.body
    pool.query('update "Users" set "email"=$1, "password"=$2, "address"=$3, "phone"=$4, "role"=$5, "username"=$6, "birthday"=$7, "updatedAt"=$8 WHERE "id"=$9',[email, password, address, phone, role, username, birthday, update, id])
      .then(item => {
        res.json(item)
      })
      .catch(err => res.status(400).json({dbError: 'db error'}))
    // console.log({ id, username, ngsinh, address, phone, email, password, role })
})
//delete user
router.delete('/admin/user', (req, res) => {
  const { id } = req.body
    pool.query('delete from "Users" where id=$1',[id])
      .then(() => {
        res.json({delete: 'true'})
      })
      .catch(err => res.status(400).json({dbError: 'db error'}))
})


module.exports = router;
