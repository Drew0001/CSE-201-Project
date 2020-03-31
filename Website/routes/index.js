var express = require('express');
var router = express.Router();
var models = require("../models");
var axios = require('axios');

/* GET home page. */
router.get('/', async function(req, res, next) {
 //if(req.session.user) {
  // res.redirect('/manager');
// } else {
  
  
  
  


  
  
  res.render('index', { title: 'TayLog'});
  console.log('hi');
 }
);
router.get('/manager', async function(req, res, next) {
  accounts = await models.Accounts.findAll({
    where: {
      UserId: req.session.user.id
    }
  });
   
   
  res.render('manager.pug', { title: 'Basketball Manager'});
 });

 router.get('/edits/:id', async function (req, res,) {
  accounts = await models.Accounts.findByPk(req.params.id);
  res.render('edit.pug', { title: 'Basketball Manager'});

 });
 router.post('/edits/:id', async function (req, res,) {
 accounts = await models.Accounts.findByPk(req.params.id);
  accounts.website = req.body.website;
  accounts.username = req.body.username;
  accounts.password = req.body.password;
  await accounts.save();

  res.redirect('/manager');
 });
 router.get('/pass/:id', async function(req, res, next) {
  accounts = await models.Accounts.findByPk(req.params.id);
  users = await models.User.findAll();
   
   
  res.render('info.pug', { title: 'Basketball Manager'});
 });
 router.get('/remove/:id', async function(req, res, next) {
 models.Accounts.destroy({
  where: {
    id: req.params.id
  }
}).then(function() {
  res.redirect('/manager');
})
 });
router.get('/loginpage', async function(req, res, next) {
  res.render('userlogin.pug', { title: 'Login' });
});


module.exports = router;
