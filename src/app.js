const express = require('express');
const routes = require('./routes');
const cors = require('cors');

require('./database');

class App {
    constructor (){
        this.server = express();

        this.conectaFront();
        this.middlewares();
        this.routes();
    }

    middlewares (){
        this.server.use(express.json());
    }

    routes (){
        this.server.use(routes);
    }

    conectaFront(){
        this.server.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "*");
            res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
            this.server.use(cors());
            next();
        });
    }
}

module.exports = new App().server;