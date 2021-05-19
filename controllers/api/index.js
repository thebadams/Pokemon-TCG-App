const router = require('express').Router();
const cardRoutes = require('./card-routes');
const userRoutes = require('./user-routes');
const deckRoutes = require('./deck-routes');
const battleRoutes = require('./battleRoutes');
const tradingRoutes = require('./trading-routes');

router.use('/cards', cardRoutes);
router.use('/users', userRoutes);
router.use('/decks', deckRoutes);
router.use('/battle', battleRoutes);
router.use('/trading', tradingRoutes);

module.exports = router;
