const Sequelize, { Model } = require('sequelize');

class User extends Model {
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.STRING,
            password_hash: Sequelize.STRING,
            cpf: Sequelize.STRING
        }, {
            sequelize
        });

        this.addHook('beforeSave', 
        async (user) => {
            if(user.password){
                user.password_hash = await bcrypt.hash(user.password, 8);
            }
        });

        return this;
    }
}

module.exports = User;