const router = require('express').Router();
const { Op } = require('sequelize');
const { Card, User, Deck } = require('../models');
const pokemon = require('../config/tcgsdk');
const withAuth = require('../utils/auth');

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
  try {
    // const userData = await User.findOne({
    //   where: {
    //     id: req.session.user_id,
    //   }
    // });
    // const user = userData.get({ plain: true });

// Uncomment and pass user thru serialized data
// { user, logged_in: req.session.logged_in } this was on line 43 after 'homepage'
    res.render('homepage', { logged_in: req.session.logged_in });
  } catch (err) {
    res.render('404', { logged_in: req.session.logged_in });
  }
});

// router.get('/battle', async (req, res) => {
//   res.render('battle', { logged_in: req.session.logged_in });
// });

router.get('/pokedex', async (req, res) => {
  console.log(req.query);
  try {
    const results = await pokemon.card.where({ q: `name:"${req.query.name}"`, pageSize: 12, page: req.query.page });
    // construct an array to include each page number
    const { totalCount } = results;
    const pageNum = Math.ceil(totalCount / 12);
    const pages = [];
    for (let i = 1; i <= pageNum; i++) {
      pages.push(i);
    }
    console.log(pages);
    // pass that array into handlebars
    const cards = results.data;
    const options = {
      logged_in: req.session.logged_in,
      cards,
      user_id: req.session.user_id,
      pages,
      pagination: true,
      query: req.query.name,
      activePage: req.query.page || 1,
    };
    console.log(options);
    res.render('pokedex', options);
    // res.json(res.paginatedResults);
    // console.log(res.paginatedResults);
  } catch (err) {
    res.status(500).render('404', { logged_in: req.session.logged_in });
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const results = await Card.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ['username', 'email'],
          include: {
            model: Deck,
            attributes: ['deck_name', 'user_id'],
          },
        },
        {
          model: Deck,
          attributes: ['deck_name', 'user_id'],
        },
      ],
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
    // console.log(decks);

    const cards = results.map((card) => card.get({ plain: true }));
    //  console.log(cards);

    res.render('profile', { logged_in: req.session.logged_in, cards, decks });
  } catch (err) {
    res.status(500).render('404', { logged_in: req.session.logged_in });
  }
});

router.get('/profile/:id', async (req, res) => {
  try {
    const deckData = await Deck.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'deck_name', 'user_id'],
      include: [
        {
          model: Card,
          attributes: ['id', 'card_name', 'description', 'card_image', 'deck_id', 'user_id'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
      ],
    });
    const decks = deckData.get({ plain: true });
    // console.log(decks);
    // // console.log(decks.deck_name);
    // res.status(200).json(decks);

    res.status(200).render('deck', {
      decks,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).render('404', { logged_in: req.session.logged_in });
  }
});

router.get('/trading', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('login');
  } else {
    // if user is logged in show Trading page
    try {
      const userCardData = await Card.findAll({
        where: {
          user_id: req.session.user_id,
        },
        include: {
          model: User,
          attributes: ["username"],
        }

      });
      const userCards = userCardData.map((card) => card.get({ plain: true }));
      console.log(userCards)
      console.log(userCards[0].user.username);

      const otherCardData = await Card.findAll({
        where: {
          user_id: {
            [Op.ne]: req.session.user_id,
          },
        },
      });

      const otherCards = otherCardData.map((card) => card.get({ plain: true }));
      // console.log(otherCards);
      res.render('trading', { logged_in: req.session.logged_in, userCards, otherCards });
    } catch (error) {
      res.render('404', { logged_in: req.session.logged_in });
    }
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('*', (req, res) => {
  res.render('404', { logged_in: req.session.logged_in });
});

module.exports = router;
