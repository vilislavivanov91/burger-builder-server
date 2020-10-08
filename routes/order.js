const express = require('express');
const router = express.Router();

const passport = require('passport');

const creteOrder = require('../controllers/createOrder');
const getAllOrders = require('../controllers/getAllOrders');

router.post('/', creteOrder);
router.get(
  '/all',
  passport.authenticate('jwt', { session: false }),
  getAllOrders
);

module.exports = router;
