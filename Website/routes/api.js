var express = require('express');
var router = express.Router();
var models = require("../models");
var axios = require('axios');
var id = 0;



   router.post('/create', async function (req, res,) {
    const body = {
    website: req.body.website,
    username: req.body.username,
    password: req.body.password,
    UserId: req.session.user.id
    }
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