const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const db = require('../models');
const patients = require('./api/patients');
const pcontents = require('./api/pcontents');
const tresults = require('./api/tresults');
const scene = require('./api/scene');
const hands = require('./api/hands');
const cors = require('cors')
const auth = require('./api/auth.js');
const authenticateUser = require('./utils/auth.js');

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
        this.app.use('/', auth);
        // this.app.use('/patients', authenticateUser, patients);
        this.app.use('/patients', patients);
        this.app.use('/pcontents', pcontents);
        this.app.use('/tresults', tresults);
        this.app.use('/scene', scene);
        this.app.use('/hands', hands);
    }
}

module.exports = new App().app;