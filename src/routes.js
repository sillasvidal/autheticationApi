const { Router } = require('express');

const routes = new Router();

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');

routes.get('/', (req, res) => {
    return res.json({ message: 'Rota principal' });
});

routes.post('/users', UserController.insert);

routes.post('/sessions', SessionController.createSession);

module.exports = routes;