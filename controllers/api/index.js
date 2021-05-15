const router = require('express').Router();
const cardRoutes = require('./card-routes');
const userRoutes = require('./user-routes');
const deckRoutes = require('./deck-routes');
const battleRoutes = require('./battleRoutes');

router.use('/cards', cardRoutes);
router.use('/users', userRoutes);
router.use('/decks', deckRoutes);
router.use('/battle', battleRoutes);

module.exports = router;
