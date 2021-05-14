const router = require('express').Router();
const { Deck } = require('../../models/Deck');

router.post('/', async (res, req) => {
  try {
    const deck = await Deck.create(req.body);
    res.status(200).json(deck);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (res, req) => {
  try {
    const deck = await Deck.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deck);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async (res, req) => {
  try {
    const deck = await Deck.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deck);
  } catch (error) {
    res.status(500).json(error);
  }
});
