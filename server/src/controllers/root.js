const express = require('express');
const models = require('../db/models');

const router = express.Router();

module.exports = (app) => {
  app.use('/', router);
};

router.get('/test', (req, res) => {

  models.users.findAll({
    where: {
      email: 'rhuansantosdev@gmail.com',
    },
  }).then(x => console.log(x));

  res.send('hello world');
});
