var express = require('express');
var router = express.Router();
var models = require("../models");
var axios = require('axios');
var id = 0;



   router.post('/create', async function (req, res,) {
    const body = {
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
    console.log("hi");
    const create = await models.Accounts.create(body);
    res.json(create); 

  });
  router.delete('/remove', async function(req, res, next) {
    console.log(id);
    const account = await models.Account.findById(id);
    account.destroy();
    res.status(204).json([]);
});
router.post('/removeid', async function(req, res, next) {
    id = req.body.id;
    
});

   








module.exports = router;