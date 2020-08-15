// libs
const { Router } = require('express');
const models = require('../../models');

// router init
const router = Router();

router.get('/:ptid', async (req, res) => {
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
        
        res.set({ 'access-control-allow-origin': '*' });
        console.log(doc, typeof doc);

        res.status(200).json({
            pcontentsInfo : doc,
        });
    } catch(error) {
        console.log(error);
        res.set({ 'access-control-allow-origin': '*' });
        res.status(400).json({ message: 'sth wrong', error });
    }
})

module.exports = router;
