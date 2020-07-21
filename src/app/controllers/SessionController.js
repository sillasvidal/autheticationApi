const User = require('../models/User');

class SessionController {
    async createSession(req, res){
        const { email, password } = req.body;

        const user = await User.findOne({
            where: {
                email,
            }
        })

        if(!user){
            return res.status(401).json({ error: "User not found" });
        }

        if(!(await user.checkPassword(password))){
            return res.status(402).json({ error: 'Password does not match' })
        }

        const { id, name } = user;

        return res.json({
            id,
            name
        })
    }
}

module.exports = new SessionController();