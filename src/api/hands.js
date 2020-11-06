const { Router } = require('express');


const router = Router();

router.post('/', async (req, res) => {
    try {
        console.log('req.body', req.body);
    } catch (error) {
        res.status(400).json({ message: 'sth wrong', error })
    }
});

module.exports = router;