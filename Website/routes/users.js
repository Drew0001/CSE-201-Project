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
      password: await bcrypt.hash(req.body.password, 10),
      favteam: req.body.favteam,
    }
    try {
      await models.User.build(user).save();
    } catch(err) {
      errors.push(err);
    }
    var user = await models.User.findOne({ where: { username: user.username } });

    var team1 = {
      teamname: 'Illinois Fighting Illini',
      confname: 'Big Ten',
      player1: 'Kofi Cockburn',
      player2: 'Ayo Dosunmu',
      player3: 'Trent Frazier',
      player4: 'Alan Griffin',
      player5: 'Giorgi Bezhanishvili',
      wins: 21,
      loses: 10,
      UserId: user.id
      }
      try {
        await models.Accounts.build(team1).save();
      } catch(err) {
        console.log(err);
      }
    var team2 = {
      teamname: 'Indiana Hoosiers',
      confname: 'Big Ten',
      player1: 'Trayce Jackson-Davis',
      player2: 'Justin Smith',
      player3: 'DeRon Davis',
      player4: 'Aljami Durham',
      player5: 'Devonte Green',
      wins: 20,
      loses: 12,
      UserId: user.id
      }
      try {
        await models.Accounts.build(team2).save();
      } catch(err) {
        console.log(err);
      }
    var team3 = {
      teamname: 'Iowa Hawkeyes',
      confname: 'Big Ten',
      player1: 'Eric Hunter Jr',
      player2: 'Evan Boudreaux',
      player3: 'Trevion Williams',
      player4: 'Nojel Eastern',
      player5: 'Sasha Stefanovic',
      wins: 20,
      loses: 10,
      UserId: user.id
      }
      try {
        await models.Accounts.build(team3).save();
      } catch(err) {
        console.log(err);
      }
    var team4 = {
      teamname: 'Maryland Terrapins',
      confname: 'Big Ten',
      player1: 'Anthony Cowan',
      player2: 'Jalen Smith',
      player3: 'Donta Smith',
      player4: 'Darryl Morsell',
      player5: 'Eric Ayala',
      wins: '23',
      loses: '7',
      UserId: user.id
      }
      try {
        await models.Accounts.build(team4).save();
      } catch(err) {
        console.log(err);
      }
    var team5 = {
      teamname: 'Michigan Wolverines',
      confname: 'Big Ten',
      player1: 'Jon Teske',
      player2: 'Brandon Johns Jr',
      player3: 'Isaiah Livers',
      player4: 'Franz Wagner',
      player5: 'Zavier Simpson',
      wins: 18,
      loses: 10,
      UserId: user.id
      }
      try {
        await models.Accounts.build(team5).save();
      } catch(err) {
        console.log(err);
      }
    var team6 = {
      teamname: 'Michigan State Spartans',
      confname: 'Big Ten',
      player1: 'Aaron Henry',
      player2: 'Xavier Tillman',
      player3: 'Marcus Bingham Jr',
      player4: 'Cassius Winston',
      player5: 'Rocket Watts',
      wins: 19,
      loses: 9,
      UserId: user.id
      }
      try {
        await models.Accounts.build(team6).save();
      } catch(err) {
        console.log(err);
      }
    var team7 = {
      teamname: 'Minnesota Golden Gophers',
      confname: 'Big Ten',
      player1: 'Daniel Oturu',
      player2: 'Michael Hurt',
      player3: 'Alihan Demir',
      player4: 'Marcus Carr',
      player5: 'Gabe Kalscheur',
      wins: 14,
      loses: 16,
      UserId: user.id
      }
      try {
        await models.Accounts.build(team7).save();
      } catch(err) {
        console.log(err);
      }
    var team8 = {
      teamname: 'Nebraska Cornhuskers',
      confname: 'Big Ten',
      player1: 'Yvan Ouedraogo',
      player2: 'Haanif Cheatham',
      player3: 'Jervay Green',
      player4: 'Charlie Easley',
      player5: 'Thorir Thorbjarnarson',
      wins: 7,
      loses: 24,
      UserId: user.id
      }
      try {
        await models.Accounts.build(team8).save();
      } catch(err) {
        console.log(err);
      }
    var team9 = {
      teamname: 'Northwestern Wildcats',
      confname: 'Big Ten',
      player1: 'Ryan Young',
      player2: 'Miller Kopp',
      player3: 'Robbie Beran',
      player4: 'Pat Spencer',
      player5: 'Boo Buie',
      wins: '8',
      loses: '23',
      UserId: user.id
      }
      try {
        await models.Accounts.build(team9).save();
      } catch(err) {
        console.log(err);
      }
    var team10 = {
      teamname: 'Ohio State Buckeyes',
      confname: 'Big Ten',
      player1: 'Luther Muhammad',
      player2: 'Andre Wesson',
      player3: 'Kaleb Wesson',
      player4: 'Duane Washington Jr.',
      player5: 'Danny Hummer',
      wins: 21,
      loses: 9,
      UserId: user.id
      }
      try {
        await models.Accounts.build(team10).save();
      } catch(err) {
        console.log(err);
      }
    var team11 = {
      teamname: 'Penn State Nittany Lions',
      confname: 'Big Ten',
      player1: 'Mike Watkins',
      player2: 'Lamar Stevens',
      player3: 'Seth Lundy',
      player4: 'Myreon Jones',
      player5: 'Jamari Wheeler',
      wins: 21,
      loses: 9,
      UserId: user.id
      }
      try {
        await models.Accounts.build(team11).save();
      } catch(err) {
        console.log(err);
      }
    var team12 = {
      teamname: 'Rutgers Scarlet Knights',
      confname: 'Big Ten',
      player1: 'Geo Baker',
      player2: 'Akwasi Yeboah',
      player3: 'Shaq Carter',
      player4: 'Montez Manthis',
      player5: 'Ron Harper Jr',
      wins: 19,
      loses: 11,
      UserId: user.id
      }
      try {
        await models.Accounts.build(team12).save();
      } catch(err) {
        console.log(err);
      }
    var team13 = {
      teamname: 'Perude Boilermakers',
      confname: 'Big Ten',
      player1: 'Luke Garza',
      player2: 'CJ Fredrick',
      player3: 'Joe Wieskamp',
      player4: 'Connor McCaffery',
      player5: 'Joe Toussaint',
      wins: 16,
      loses: 14,
      UserId: user.id
      }
      try {
        await models.Accounts.build(team13).save();
      } catch(err) {
        console.log(err);
      }
    var team14 = {
      teamname: 'Wisconsin Badgers',
      confname: 'Big Ten',
      player1: 'Aleem Ford',
      player2: 'Nathan Reuvers',
      player3: 'DMitrik Trice',
      player4: 'Brevin Pritzi',
      player5: 'Brad Davison',
      wins: 19,
      loses: 10,
      UserId: user.id
      }
      try {
        await models.Accounts.build(team14).save();
      } catch(err) {
        console.log(err);
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
  var admin = await models.User.findOne({ where: { username: 'admin' } });
  
  if (user) {
    var auth = await bcrypt.compare(password, user.password);
    if (username == 'admin') {
      console.log(userid);
      req.session.user = admin;
      var userid = req.session.user.id
       
 
       return res.redirect('/manageradmin');
     }
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



