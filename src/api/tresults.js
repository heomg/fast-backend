const { Router } = require('express');
const { sequelize, Sequelize } = require('../../models');
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
        let ptid = req.body.ptid;
        let ctid = req.body.ctid;
        let tkidCdateArr = req.body.tkidCdateArr;

        let query = `(SELECT tkid, etime, rtime, cdatetime FROM tresult
                        WHERE ptid = ${ptid} AND ctid = ${ctid} AND tkid = ${tkidCdateArr[0].tkid} AND cdatetime <= ${tkidCdateArr[0].cdatetime}
                        ORDER BY cdatetime DESC LIMIT 30)`;

        for (let i = 1; i < tkidCdateArr.length; i++) {
            query += ` UNION ALL
                    (SELECT tkid, etime, rtime, cdatetime FROM tresult
                        WHERE ptid = ${ptid} AND ctid = ${ctid} AND tkid = ${tkidCdateArr[i].tkid} AND cdatetime <= ${tkidCdateArr[i].cdatetime}
                        ORDER BY cdatetime DESC LIMIT 30)`
        }

        const doc = await sequelize.query(
                query,
            {
                type: Sequelize.QueryTypes.SELECT,
            }
        );
        console.log('doc', doc);
        res.status(200).json({
            taskTimes: doc,
        });
    } catch (error) {
        res.status(400).json({ message: 'sth wrong', error });
    }
});

module.exports = router;