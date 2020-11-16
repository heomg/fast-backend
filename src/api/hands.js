const { Router } = require('express');


const router = Router();

router.get('/', async (req, res) => {
    try {
        console.log('req.body', req.body);
        res.send('hello');
    } catch (error) {
        res.status(400).json({ message: 'sth wrong', error })
    }
});

router.post('/', async (req, res) => {
    try {
        console.log('req.body', req.body);
        res.send('hello');
    } catch (error) {
        res.status(400).json({ message: 'sth wrong', error })
    }
});

module.exports = router;