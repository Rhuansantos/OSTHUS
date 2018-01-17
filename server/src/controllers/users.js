const express = require('express');
const models = require('../db/models');

const router = express.Router();

module.exports = (app) => {
  app.use('/user', router);
};

/**
 * @api {get} /user/getById/${id}
 * @apiParam {Number} id Users unique ID.
 * @apiVersion 0.1.0
 * @apiName GetUser by id
 * @apiGroup User
 *  * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "name": "Rhuan",
 *       "email": "Santos",
 *       "Phone": "407-683-6105",
 *       "createdAt": "2018-01-17T19:50:34.152Z",
 *       "updatedAt": "2018-01-17T19:50:34.152Z",
 *       "histories": [
          {
          "action": "login",
          "createdAt": "2018-01-17T19:50:34.188Z",
          },
        ]
 *     }
 *  * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.get('/getById/:uname', (req, res) => {
  models.users.findAll({
    where: { id: req.params.uname },
    include: [{ model: models.histories, attributes: ['action', 'createdAt'] }],
  }).then((_data) => {
    if (_data.length > 0) {
      res.json(_data);
    } else {
      res.send({ error: 'UseNotFound' });
    }
  });
});

/**
 * @api {get} /user/all
 * @apiVersion 0.1.0
 * @apiGroup User
 *  * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       id: 1,
 *       "name": "Rhuan",
 *       "email": "Santos",
 *       "Phone": "407-683-6105",
 *       "createdAt": "2018-01-17T19:50:34.152Z",
 *       "updatedAt": "2018-01-17T19:50:34.152Z",
 *     }
 *  * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Something went wrong"
 *     }
 */
router.get('/getAll', (req, res) => {
  models.users.findAll({
    include: [{ model: models.histories }],
  }).then((_data) => {
    res.json(_data);
  });
});

/**
 * @api {post} /user/new
 * @apiVersion 0.1.0
 * @apiGroup User
 * @apiParamExample {json} Request-Example:
 *     {
 *       "name": "Rhuan",
 *       "email": "Santos",
 *       "Phone": "407-683-6105",
 *       "role": "admin"
 *     }
*/
router.post('/new', (req, res) => {
  const data = req.body;
  models.users.create({
    name: data.name,
    email: data.email,
    phone: data.phone,
    role: data.role,
  }).then(() => {
    res.json({ sucess: 'content insert' });
  });
});
