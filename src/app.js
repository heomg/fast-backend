const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const db = require('../models');
const patients = require('./api/patients');
const pcontents = require('./api/pcontents');
const tresults = require('./api/tresults');
const cors = require('cors');

class App {

    constructor () {
        this.app = express();

        this.dbConnection();
        
        // 미들웨어 셋팅
        this.setMiddleWare();

        // 라우팅
        this.getRouting();


    }

    dbConnection(){
        // DB authentication
        db.sequelize.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .then(() => {
            console.log('DB Sync complete.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    }

    setMiddleWare (){
        
        // 미들웨어 셋팅
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());

    }

    getRouting (){
        this.app.use('/patients', patients);
        this.app.use('/pcontents', pcontents);
        this.app.use('/tresults', tresults);
    }

}

module.exports = new App().app;