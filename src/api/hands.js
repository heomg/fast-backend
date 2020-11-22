const { Router } = require('express');
const fs = require('fs');
const { sequelize, Sequelize } = require('../../models');

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
    let pcidMax;
    try {
        const doc = await sequelize.query(
            'select pcid from pcontent order by pcid desc limit 1',
            {
                type: Sequelize.QueryTypes.SELECT,
            }
        );
        console.log('pcidMax check', doc);
        pcidMax = doc[0].pcid;
    } catch (error) {
        return res.status(400).json({ message: 'sth wrong', error });
    }
    console.log('pcidMax', pcidMax);

    let ptid = req.body.ptid;
    let ctid = req.body.ctid;
    let pcid = pcidMax + 1;
    let score = 43.5;
    let tresultArr = req.body.tresultArr;
    let cdatetime = tresultArr[0].cdatetime;
    let cdate = cdatetime.substring(0, 8);
    console.log('pcidMax + 1', pcid);
    try {

        let pcquery = `insert into pcontent (
            pcid, ptid, ctid, cdate, score
        )
        values (
            ${pcid}, ${ptid}, ${ctid}, ${cdate}, ${score}
        )`;

        await sequelize.query(
            pcquery,
            {
                type: Sequelize.QueryTypes.INSERT,
            }
        );
    } catch (error) {
        return res.status(400).json({ message: 'sth wrong', error });
    }

    try {
        // console.log('req.body', req.body);
        // let data = JSON.stringify(req.body);
        // data = 'export default ' + data;
        // data = data + ';';

        // fs.writeFile('../fast-2/public/leftHands2.js', data, (err) => {
        //     if (err) throw err;
        //     console.log('the file has been saved!');
        // });

        let tkidStart;
        for (let i = 0; i < tresultArr.length; i++) {
            if (tresultArr[i].tkid != 100) {
                tkidStart = i;
                break;
            }
        }
        // console.log('tkidStart', tkidStart);
        // console.log('tresultArr.length', tresultArr.length);
        // return;

        // ${tresultArr[tkidStart].etime}, ${tresultArr[tkidStart].rtime}, ${tresultArr[tkidStart].epoint},


        let ii = 101;
        let tacd = `${ptid}-${ctid}-${pcid}-${ii}-${tkidStart}`;
        let query = `insert into tresult (
            tacd, ptid, ctid, pcid, tkid, seqno,
            etime, rtime, epoint,
            cdatetime, 
            lthumbfirstmin, lthumbfirstmax, lthumbsecondmin, lthumbsecondmax,
            lindexfirstmin, lindexfirstmax, lindexsecondmin, lindexsecondmax,
            lmiddlefirstmin, lmiddlefirstmax, lmiddlesecondmin, lmiddlesecondmax,
            lringfirstmin, lringfirstmax, lringsecondmin, lringsecondmax,
            lpinkyfirstmin, lpinkyfirstmax, lpinkysecondmin, lpinkysecondmax, 
            rthumbfirstmin, rthumbfirstmax, rthumbsecondmin, rthumbsecondmax,
            rindexfirstmin, rindexfirstmax, rindexsecondmin, rindexsecondmax,
            rmiddlefirstmin, rmiddlefirstmax, rmiddlesecondmin, rmiddlesecondmax,
            rringfirstmin, rringfirstmax, rringsecondmin, rringsecondmax,
            rpinkyfirstmin, rpinkyfirstmax, rpinkysecondmin, rpinkysecondmax
            )
            values (
                ${tacd}, ${ptid}, ${ctid}, ${pcid}, ${ii}, ${tkidStart},
                ${tresultArr[tkidStart].etime}, 22, 23,
                ${tresultArr[tkidStart].cdatetime},
                ${tresultArr[tkidStart].lthumbfirstmin}, ${tresultArr[tkidStart].lthumbfirstmax}, ${tresultArr[tkidStart].lthumbsecondmin}, ${tresultArr[tkidStart].lthumbsecondmax},
                ${tresultArr[tkidStart].lindexfirstmin}, ${tresultArr[tkidStart].lindexfirstmax}, ${tresultArr[tkidStart].lindexsecondmin}, ${tresultArr[tkidStart].lindexsecondmax},
                ${tresultArr[tkidStart].lmiddlefirstmin}, ${tresultArr[tkidStart].lmiddlefirstmax}, ${tresultArr[tkidStart].lmiddlesecondmin}, ${tresultArr[tkidStart].lmiddlesecondmax},
                ${tresultArr[tkidStart].lringfirstmin}, ${tresultArr[tkidStart].lringfirstmax}, ${tresultArr[tkidStart].lringsecondmin}, ${tresultArr[tkidStart].lringsecondmax},
                ${tresultArr[tkidStart].lpinkyfirstmin}, ${tresultArr[tkidStart].lpinkyfirstmax}, ${tresultArr[tkidStart].lpinkysecondmin}, ${tresultArr[tkidStart].lpinkysecondmax}, 
                ${tresultArr[tkidStart].rthumbfirstmin}, ${tresultArr[tkidStart].rthumbfirstmax}, ${tresultArr[tkidStart].rthumbsecondmin}, ${tresultArr[tkidStart].rthumbsecondmax},
                ${tresultArr[tkidStart].rindexfirstmin}, ${tresultArr[tkidStart].rindexfirstmax}, ${tresultArr[tkidStart].rindexsecondmin}, ${tresultArr[tkidStart].rindexsecondmax},
                ${tresultArr[tkidStart].rmiddlefirstmin}, ${tresultArr[tkidStart].rmiddlefirstmax}, ${tresultArr[tkidStart].rmiddlesecondmin}, ${tresultArr[tkidStart].rmiddlesecondmax},
                ${tresultArr[tkidStart].rringfirstmin}, ${tresultArr[tkidStart].rringfirstmax}, ${tresultArr[tkidStart].rringsecondmin}, ${tresultArr[tkidStart].rringsecondmax},
                ${tresultArr[tkidStart].rpinkyfirstmin}, ${tresultArr[tkidStart].rpinkyfirstmax}, ${tresultArr[tkidStart].rpinkysecondmin}, ${tresultArr[tkidStart].rpinkysecondmax}
            );`;
        ii = ii + 1;
        // console.log('ii', ii);
        // console.log('query', query)
        await sequelize.query(
            query,
            {
                type: Sequelize.QueryTypes.INSERT,
            }
        ); 
        for (let i = tkidStart + 1; i < tresultArr.length; i++) {
            console.log('i and ii', i, ii);
            tacd = `${ptid}-${ctid}-${pcid}-${ii}-${i}`
            query = `
            insert into tresult (
                tacd, ptid, ctid, pcid, tkid, seqno,
                etime, rtime, epoint,
                cdatetime, 
                lthumbfirstmin, lthumbfirstmax, lthumbsecondmin, lthumbsecondmax,
                lindexfirstmin, lindexfirstmax, lindexsecondmin, lindexsecondmax,
                lmiddlefirstmin, lmiddlefirstmax, lmiddlesecondmin, lmiddlesecondmax,
                lringfirstmin, lringfirstmax, lringsecondmin, lringsecondmax,
                lpinkyfirstmin, lpinkyfirstmax, lpinkysecondmin, lpinkysecondmax, 
                rthumbfirstmin, rthumbfirstmax, rthumbsecondmin, rthumbsecondmax,
                rindexfirstmin, rindexfirstmax, rindexsecondmin, rindexsecondmax,
                rmiddlefirstmin, rmiddlefirstmax, rmiddlesecondmin, rmiddlesecondmax,
                rringfirstmin, rringfirstmax, rringsecondmin, rringsecondmax,
                rpinkyfirstmin, rpinkyfirstmax, rpinkysecondmin, rpinkysecondmax
                )
                values (
                    ${tacd}, ${ptid}, ${ctid}, ${pcid}, ${ii}, ${i},
                    ${tresultArr[i].etime}, 22, 23,
                    ${tresultArr[i].cdatetime},
                    ${tresultArr[i].lthumbfirstmin}, ${tresultArr[i].lthumbfirstmax}, ${tresultArr[i].lthumbsecondmin}, ${tresultArr[i].lthumbsecondmax},
                    ${tresultArr[i].lindexfirstmin}, ${tresultArr[i].lindexfirstmax}, ${tresultArr[i].lindexsecondmin}, ${tresultArr[i].lindexsecondmax},
                    ${tresultArr[i].lmiddlefirstmin}, ${tresultArr[i].lmiddlefirstmax}, ${tresultArr[i].lmiddlesecondmin}, ${tresultArr[i].lmiddlesecondmax},
                    ${tresultArr[i].lringfirstmin}, ${tresultArr[i].lringfirstmax}, ${tresultArr[i].lringsecondmin}, ${tresultArr[i].lringsecondmax},
                    ${tresultArr[i].lpinkyfirstmin}, ${tresultArr[i].lpinkyfirstmax}, ${tresultArr[i].lpinkysecondmin}, ${tresultArr[i].lpinkysecondmax}, 
                    ${tresultArr[i].rthumbfirstmin}, ${tresultArr[i].rthumbfirstmax}, ${tresultArr[i].rthumbsecondmin}, ${tresultArr[i].rthumbsecondmax},
                    ${tresultArr[i].rindexfirstmin}, ${tresultArr[i].rindexfirstmax}, ${tresultArr[i].rindexsecondmin}, ${tresultArr[i].rindexsecondmax},
                    ${tresultArr[i].rmiddlefirstmin}, ${tresultArr[i].rmiddlefirstmax}, ${tresultArr[i].rmiddlesecondmin}, ${tresultArr[i].rmiddlesecondmax},
                    ${tresultArr[i].rringfirstmin}, ${tresultArr[i].rringfirstmax}, ${tresultArr[i].rringsecondmin}, ${tresultArr[i].rringsecondmax},
                    ${tresultArr[i].rpinkyfirstmin}, ${tresultArr[i].rpinkyfirstmax}, ${tresultArr[i].rpinkysecondmin}, ${tresultArr[i].rpinkysecondmax}
                );`;
            try {
                await sequelize.query(
                    query,
                    {
                        type: Sequelize.QueryTypes.INSERT,
                    }
                ) 
            } catch (error) {
                console.log('i, ii', i, ii);
                console.error(error);
                return;
            }
            ii++;
        }
        return res.status(200).json({
            hello: 'hello',
        });
    } catch (error) {
        return res.status(400).json({ message: 'sth wrong', error })
    }
});

module.exports = router;