const { Router } = require('express');
const models = require('../../models');

// router init
const router = Router();

router.post('/', async (req, res) => {
    res.set({ 'access-control-allow-origin': '*' });
    console.log('abc');
    try {
        const doc = await models.tresult.findAll({
            where: {
                ptid: req.body.ptid,
                ctid: req.body.ctid,
                pcid: req.body.pcid,
            },
        });

        res.status(200).json({
            tkcds : doc,
        });
    } catch (error) {
        // console.log(error);
        res.status(400).json({ message: 'sth wrong', error });
    }
});

router.post('/tkid', async (req, res) => {
    try {
        const doc = await models.tresult.findAll({
            attributes: ['tkid', 'etime', 'rtime', 'cdatetime'],
            where: {
                ptid: req.body.ptid,
                ctid: req.body.ctid,
                tkid: req.body.tkid,
                // cdatetime: {
                //     $lte: req.body.cdatetime,
                // }
            },
            order: [['cdatetime', 'desc']],
            // limit: 30,
        });
        console.log('doc', doc);
        res.status(200).json({
            taskTimes: doc,
        });
    } catch (error) {
        res.status(400).json({ message: 'sth wrong', error });
    }
});

module.exports = router;