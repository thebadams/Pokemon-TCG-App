const router = require('express').Router();
const cardRoutes = require('./card-routes');
const userRoutes = require('./user-routes');
const deckRoutes = require('./deck-routes');

router.use('/cards', cardRoutes);
router.use('/users', userRoutes);
router.use('/decks', deckRoutes);

module.exports = router;
