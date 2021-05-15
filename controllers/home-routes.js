const router = require('express').Router();
const { Card, User } = require('../models');
const pokemon = require('../config/tcgsdk')
// const withAuth = require('../utils/auth');

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

router.get('/battle', async (req, res) => {
  res.render('battle', { logged_in: req.session.logged_in });
});

router.get('/pokedex', async (req, res) => {
  const results = await pokemon.card.where({ q: `name:${req.query.name}`, pageSize: 12, page: 1 });
  const cards = results.data;
  res.render('pokedex', { logged_in: req.session.logged_in, cards });
});

router.get('/profile', async (req, res) => {
  res.render('profile', { logged_in: req.session.logged_in });
});

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
