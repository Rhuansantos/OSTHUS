const express = require('express');
const models = require('../db/models');

const router = express.Router();

module.exports = (app) => {
  app.use('/users', router);
};

router.get('/getById', (req, res) => {
  models.users.findAll({
    include: [{ model: models.histories }],
  }).then((_data) => {
    res.json(_data);
  });
});

/**
 * @api {get} /user/:id
 */
router.get('/getAll', (req, res) => {
  models.users.findAll({
    include: [{ model: models.histories }],
  }).then((_data) => {
    res.json(_data);
  });
});
