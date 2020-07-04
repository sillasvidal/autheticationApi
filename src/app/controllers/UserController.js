const User = require('../models/User');

class UserController {
    async insert(req, res) {
        const { name, email, password } = await User.create(req.body)

        return res.json({ name, email, password });
    }
}

module.exports = new UserController();