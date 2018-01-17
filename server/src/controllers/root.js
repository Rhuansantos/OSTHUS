const express = require('express');
const models = require('../db/models');

const router = express.Router();

module.exports = (app) => {
  app.use('/', router);
};

router.get('/test', (req, res) => {
  models.clients.findAll({
    where: {
      email: 'rhuansantosdev@gmail.com',
    },
  }).then((_data) => {
    // _data.map(_data => _data.id);
    res.json(_data);
  });

});
