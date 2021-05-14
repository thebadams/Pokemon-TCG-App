const router = require('express').Router();
const { Card, User } = require('../models');
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
  res.render('homepage', { title: 'Express' });
});

router.get('/battle', async (req, res) => {
  res.render('battle', { title: 'Express' });
});

router.get('/pokedex', async (req, res) => {
  res.render('pokedex', { title: 'Express' });
});

router.get('/profile', async (req, res) => {
  res.render('profile', { title: 'Express' });
});

router.get('/trading', async (req, res) => {
  res.render('trading', { title: 'Express' });
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
