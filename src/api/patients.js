// libs
const { Router } = require('express');
const models = require('../../models');

// router init
const router = Router();

router.get('/', async (req, res) => {
  try {
    const docs = await models.patient.findAll();
    console.log(docs);

    res.set({ 'access-control-allow-origin': '*' });
    res.status(200).json({
      patientsInfo : docs,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'sth wrong', error });
  }
});

router.get('/:ptname', async (req, res) => {
  try {
    const doc = await models.patient.findAll({
      where: {
        ptname: req.params.ptname,
      }
    });

    res.set({ 'access-control-allow-origin': '*' });
    console.log(doc, typeof doc);
    if (doc == []) {
      return res.status(400).json({ message: 'the data is not found' });
    }

    res.status(200).json({ 
      patientsInfo : doc,
    });
  } catch(error) {
    console.error(error);
    res.set({ 'access-control-allow-origin': '*' });
    res.status(400).json({ message: 'sth wrong', error });
  }
})

// router.post('/', async (req, res) => {
//   try {
//     await models.patient.create(req.body);
//     res.set({ 'access-control-allow-origin': '*' });
//     res.status(201);
//   } catch (error) {
//     console.log(error);
//     res.set({ 'access-control-allow-origin': '*' });
//     if (error.code === 11000) {
//       return res.status(400).send({ message: 'Duplicated Data', error });
//     }
//     res.status(400).send({ message: 'sth wrong', error });
//   }
// });

module.exports = router;
