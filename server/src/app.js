const express = require('express');
const glob = require('glob');
const bodyParser = require('body-parser');
const pug = require('pug');
const forceSsl = require('express-force-ssl');

module.exports = function(app) {
  // Configure view engine to render pug templates.
  app.set('views', __dirname + '/views');
  app.set('view engine', 'pug');

  // app.use(forceSsl);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));


  let models = glob.sync(__dirname + '/models/*.js');
  models.forEach(function(modelFileName){
    require(modelFileName);
  });

  // include all the controllers
  let controllers = glob.sync(__dirname + '/controllers/*.js');
  controllers.forEach(function(controllerFileName){
    require(controllerFileName)(app);
  });

}
