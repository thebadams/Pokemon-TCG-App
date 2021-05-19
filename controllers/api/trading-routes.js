const router = require('express').Router();
const { User, Card, Deck } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const cardData = await Card.findAll({
      attributes: ["id", "card_name", "description", "card_image", "deck_id"],
      include: [
        {
          model: User,
          attributes: ["username"]
        },
        {
          model: Deck,
          attributes: ["deck_name", "user_id"],
        }
      ]
    });

    res.status(200).json(cardData);


  } catch (err) {
    res.status(500).json(err)
  }
});


// router.post('/', async (req, res) => {
//   try {
//     const tradedCard = await Card.findAll()


//   } catch (err) {
//     res.status(500).json(err)
//   }
// })




// router.get('/:id', async (req, res) => {
//   try {
//     const cardData = await 


//   } catch (err) {
//     res.status(500).json(err)
//   }
// })


// router.put('/:id', async (req, res) => {
//   try {
//     const tradedCard = await Deck.update({
//       ...req.body,
//       user_id: req.session.user_id,
//     },
//     {
//       where: {
//         id: req.params.id,
//       },
//     },
//     );
//     if (!tradedCard) {
//       res.status(404).json({ message: "didnt work" });
//       return;
//     }
//     res.status(200).json()

//   } catch (err) {
//     res.status(500).json(err)
//   }
// })







module.exports = router;