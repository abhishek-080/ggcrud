var express = require('express');
var router = express.Router();
var controller=require('../controller/user_controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route('/login')
.post(async(req,res,next)=>{
  try{

      

    res.json(await controller.loginUser(req.body.username,req.body.password));
  }catch(err){
    next(err);
  }

})


/* Register Users. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route('/register')
.post(async(req,res,next)=>{
  try{

      

    res.json(await controller.registerUser(req.body.username,req.body.password));
  }catch(err){
    next(err);
  }

})


/* Update Users. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route('/edit/(:id)')
.post(async(req,res,next)=>{
  try{

      

    res.json(await controller.editUser(req.body.username,req.body.password));
  }catch(err){
    next(err);
  }

})



/* Delete Users. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route('/delete/(:id)')
.post(async(req,res,next)=>{
  try{

      

    res.json(await controller.deleteUser(req.body.username,req.body.password));
  }catch(err){
    next(err);
  }

})


module.exports = router;
