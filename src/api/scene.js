const { Router } = require('express');
const fs = require('fs');
const path = require('path');

const router = Router();

router.get('/', async(req, res) => {
    let options = {
        root: path.join(__dirname, '..', 'scene'),
        headers: {
            'content-type': 'application/babylon',
        }
    }

    let fileName = 'CT02.babylon';

    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Sent: ', fileName)
        } 
    })
});

router.get('/:name', async(req, res) => {
    let options = {
        root: path.join(__dirname, '..', 'scene'),
        headers: {
            'content-type': 'application/babylon',
        }
    }   

    let fileName = req.params.name;

    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Sent: ', fileName)
        } 
    })
});


module.exports = router;