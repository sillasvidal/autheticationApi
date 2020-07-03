const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'authentication',
    'SA',
    'S35SUP5RSRG123',
    {
        host: 'localhost',
        dialect: 'mssql'
    }
);

async function teste() {
    try{
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados realizada com sucesso!');
    }catch{
        console.log('Não foi possível se conectar ao banco de dados.');
    }
}

teste();

module.exports = sequelize;