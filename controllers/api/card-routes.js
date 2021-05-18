const router = require('express').Router();
const { Card } = require('../../models');

// add a new card

router.get('/', async (req, res)=> {
  try {
    const cards = await Card.findAll()
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json(error)
  }
})
router.post('/', async (req, res) => {
  try {
    const card = await Card.create(req.body);
console.log(card);
    res.status(200).json(card);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// router.
// update card owner
router.put('/:id', async (req, res) => {
  try {
    const result = await Card.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const card = await Card.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
