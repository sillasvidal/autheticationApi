const { Router } = require('express');

const routes = new Router();

const UserController = require('./app/controllers/UserController');

routes.get('/users', UserController.insert);

module.exports = routes;