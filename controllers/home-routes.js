const router = require('express').Router();
const { Card, User, Deck } = require('../models');
const pokemon = require('../config/tcgsdk');

const withAuth = require('../utils/auth');


// pagination logic !!

// function paginatedResults(model) {
//   return (req, res, next) => {
//     const page = parseInt(req.query.page);
//     const limit = parseInt(req.query.limit);

//     const startIndex = (page - 1) * limit;
//     const endIndex = page * limit;

//     const results = {};

//     if (endIndex < Card.length) {
//       results.next = {
//         page: page + 1,
//         limit,
//       };
//     }

//     if (startIndex > 0) {
//       results.previous = {
//         page: page - 1,
//         limit,
//       };
//     }

//     results.results = model.slice(startIndex, endIndex);

//     res.paginatedResults = results;
//     next();
//   };
// }

// router.get('/', async (req, res) => {
//   try {
//     // Get all projects and JOIN with user data
//     const cardData = await Card.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const cards = cardData.map((card) => card.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('homepage', {
//       cards,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/', async (req, res) => {
  res.render('homepage', { logged_in: req.session.logged_in });
});

// router.get('/battle', async (req, res) => {
//   res.render('battle', { logged_in: req.session.logged_in });
// });

router.get('/pokedex', async (req, res) => {
  try {
    const results = await pokemon.card.where({ q: `name:${req.query.name}`, pageSize: 12, page: 1 });
    const cards = results.data;
    res.render('pokedex', { logged_in: req.session.logged_in, cards, user_id: req.session.user_id });
    // res.json(res.paginatedResults);
    // console.log(res.paginatedResults);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const results = await Card.findAll({
      where: { 
        user_id: req.session.user_id 
      },
      include: [
        {
          model: User,
          attributes: ["username", "email"],
          include: {
            model: Deck,
            attributes: ["deck_name", "user_id"]
          }
        },
        {
          model: Deck,
          attributes: ["deck_name", "user_id"],
        }
      ]
    });

    // const deckData = await Deck.findAll({
    //   where: {
    //     id: req.params.user_id,
    //   },
    //   attributes: ["id"]
    // });
    const deckData = await Deck.findAll({
      // where: {
      //   user_id: req.session.user_id,
      // }
    });

    const decks = deckData.map((card) => card.get({ plain: true }));
  //  console.log(decks);

    
   const cards = results.map((card) => card.get({ plain: true }));
  //  console.log(cards);
  
    res.render('profile', { logged_in: req.session.logged_in, cards, decks });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile/:id', async (req, res) => {
  try {
    const deckData = await Deck.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id","deck_name", "user_id"],
      include: [
       {
         model: Card,
         attributes: ["id", "card_name", "description", "card_image", "deck_id", "user_id"],
         include: {
           model: User,
           attributes: ["username"],
         }
       },
      ]
    });
    const decks = deckData.get({ plain: true });
    // console.log(decks);
    // // console.log(decks.deck_name);
    // res.status(200).json(decks);
    console.log(decks);
    res.status(200).render('deck', {
      decks
      // logged_in: req.session.logged_in,
    })
 



  } catch (err) {
    res.status(500).json(err)
  }
})








router.get('/trading', async (req, res) => {
  res.render('trading', { logged_in: req.session.logged_in });
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;