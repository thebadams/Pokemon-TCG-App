/* eslint-disable no-plusplus */
const router = require('express').Router();
const { Card, User } = require('../models');
const pokemon = require('../config/tcgsdk');
// const withAuth = require('../utils/auth');

// pagination logic !!
//page num
// page size
//count per page
//totalCount
//100 results total // totalCount = 100
//10 results per page //count = 10
//page 1: 90 results unshown totalCount - count
//page 2: 80 totalCount -(2*count)
//totalcount - (pageNum*count)
//if totalcount - pageNum*10 <= 0 we don't need another page
//page 3: 70
//page 4: 60
//page 5: 50
//page 6: 40
//page 7: 30
//page 8: 20
//page 9: 10
//page 10: 0
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
    const results = await pokemon.card.where({ q: `name:${req.query.name}`, pageSize: 12, page: req.query.page || 1 });
    //construct an array to include each page number
    const totalResults = results.totalCount;
    const pages = Math.ceil(totalResults / 12);
    const pageArray = [];
    for (let i = 1; i<=pages; i++) {
      pageArray.push(i);
    }
    //pass that array into handlebars
    const cards = results.data;
    res.render('pokedex', {
      logged_in: req.session.logged_in, cards, user_id: req.session.user_id, pageArray,
    });
    // res.json(res.paginatedResults);
    // console.log(res.paginatedResults);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', async (req, res) => {
  try {
    const results = await Card.findAll({
      where: { user_id: req.session.user_id },
    });
    const cards = results.map((card) => card.get({ plain: true }));
    res.render('profile', { logged_in: req.session.logged_in, cards });
  } catch (err) {
    res.status(500).json(err);
  }
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
