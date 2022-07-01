var express = require('express');
var router = express.Router();
const { getUsers,getUser,createUser,updateUser,deleteUser } = require('../controller/api/user_controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
 let jsonv= res.json ({
    name:"hello",
  })
console.log(jsonv);
});


// user crud
// get users
router.get('/users',(req,res)=>getUsers(req,res));
// get one user
router.get('/users/:id',(req,res)=>getUser(req,res));
// create user
router.post('/users',(req,res)=>createUser(req,res));
// update user
router.put('/users/:id',(req,res)=>updateUser(req,res));
// delete user
router.delete('/users/:id',(req,res)=>deleteUser(req,res));



module.exports = router;
