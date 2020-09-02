// libs
const { Router } = require('express');
const models = require('../../models');

// router init
const router = Router();

router.get('/:ptid', async (req, res) => {
    res.set({ 'access-control-allow-origin': '*' });
    try {
        const doc = await models.pcontent.findAll({
            include: [
                {
                    model: models.content,
                    attributes: ['ctname']
                }
            ],
            where: {
                ptid: req.params.ptid,
            }
        });
        
        console.log(doc, typeof doc);

        res.status(200).json({
            pcontentsInfo : doc,
        });
    } catch(error) {
        console.log(error);
        res.status(400).json({ message: 'sth wrong', error });
    }
})

module.exports = router;
