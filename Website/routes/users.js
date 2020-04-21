var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var models = require("../models");


/* GET users listing. */
router.get('/register', async function(req, res, next) {
  res.render('register.pug', { title: 'Express' });
});

router.post('/register', async function (req, res, next) {
  var errors = [];
  var user;

  try {
    user = await models.User.findOne({where: { username: req.body.username}});
    console.log(user);
  } catch(err) {
    errors.push(err);
  }

  if (user) {
    errors.push("That username is already taken.");
  }

  if (req.body.password !== req.body.confirm_password) {
    errors.push("Passwords do not match.");
  }

  if (!(req.body.username && req.body.password && req.body.confirm_password)) {
    errors.push("All fields are required.");
  }

  if (!errors.length) {
    var user = {
      username: req.body.username,
      password: await bcrypt.hash(req.body.password, 10)
    }
    try {
      await models.User.build(user).save();
    } catch(err) {
      errors.push(err);
    }
  }

  if (errors.length) {
    res.render('register', { errors: errors });
  }

  res.redirect('/users/login');



});

router.get('/login', function (req, res, next) {
  res.render('userlogin');
});

router.post('/login', async function (req, res, next) { 
  var errors = [];
  if (req.body.username && req.body.password) {
    var username = req.body.username;
    var password = req.body.password;
  }
  var user = await models.User.findOne({ where: { username: username } });
  if (user) {
    var auth = await bcrypt.compare(password, user.password);

    if (auth) {
     console.log(userid);
     req.session.user = user;
     var userid = req.session.user.id
      

      return res.redirect('/manager');
    } else {
      errors.push('Incorrect username/password');
      return res.render('userlogin', { errors: errors });
    }
  } else {
    errors.push('Incorrect username/password');
    console.log("help");
    return res.render('userlogin', { errors: errors }); 
    
    }

});

router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;



