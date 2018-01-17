const express = require('express');
const glob = require('glob');
const bodyParser = require('body-parser');

module.exports = (app) => {
  // app.use(forceSsl);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(express.static('public'));

  // include all the controllers
  const controllers = glob.sync(__dirname + '/controllers/*.js');
  controllers.forEach((controllerFileName) => {
    require(controllerFileName)(app);
  });
};
