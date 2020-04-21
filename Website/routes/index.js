var express = require('express');
var router = express.Router();
var models = require("../models");
var axios = require('axios');

/* GET home page. */
router.get('/', async function(req, res, next) {
 if(req.session.user) {
   res.redirect('/manager');
 } else {
  
  
  
  


  
  
  res.render('index', { title: 'TayLog'});
  console.log('hi');
 }
});
router.get('/manager', async function(req, res, next) {
  
  accounts = await models.Accounts.findAll({
    where: {
     UserId: req.session.user.id
    }
  });
   
   
  res.render('manager.pug', { title: 'Basketball Manager'});
 });

 router.get('/edits/:id', async function (req, res,) {
  accounts = await models.Accounts.findOne({
    where: {
     id: req.params.id,
    }
  });
  res.render('edit.pug', { title: 'Basketball Manager'});

 });
 router.get('/add', async function (req, res,) {
 // user = await models.Users.findByPk(req.params.id);
  res.render('add.pug', { title: 'Add Team'});

 });
 router.post('/create', async function (req, res,) {
    var team = {
    teamname: req.body.teamname,
    confname: req.body.confname,
    player1: req.body.player1,
    player2: req.body.player2,
    player3: req.body.player3,
    player4: req.body.player4,
    player5: req.body.player5,
    wins: req.body.wins,
    loses: req.body.loses,
    UserId: req.session.user.id
    }
    try {
      await models.Accounts.build(team).save();
    } catch(err) {
      console.log("nope");
    }
    res.redirect('/manager');
  });
  
 router.post('/edits/:id', async function (req, res,) {
  accounts = await models.Accounts.findOne({
    where: {
     id: req.params.id,
    }
  });
  if(req.body.team) {
  accounts.team = req.body.website;
  }
  if(req.body.confname) {
  accounts.confname = req.body.confname
  }
  if(req.body.player1) {
  accounts.player1 = req.body.player1;
  }
  if(req.body.player2) {
    accounts.player2 = req.body.player2;
    }
  if(req.body.player3) {
    accounts.player3 = req.body.player3;
      }
  if(req.body.player4) {
    accounts.player4 = req.body.player4;
        }
  if(req.body.player5) {
    accounts.player5 = req.body.player5;
          }
  if(req.body.wins) {
    accounts.wins = req.body.wins;
            }
  if(req.body.loses) {
    accounts.loses = req.body.loses;
      }
  await accounts.save();

  res.redirect('/manager');
 });
 router.get('/pass/:id', async function(req, res, next) {
  accounts = await models.Accounts.findOne({
    where: {
     id: req.params.id,
    }
  });
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
