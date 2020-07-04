const User = require('../models/User');

class UserController {
    async insert(req, res) {
        return res.json({ message: 'cadastrando usuário...'})
    }
}

module.exports = new UserController();