const express = require('express');
const router = express.Router();

const passport = require('passport');

const creteOrder = require('../controllers/order/createOrder');
const getAllOrdersByEmail = require('../controllers/order/getAllOrdersByEmail');
const changeOrderStage = require('../controllers/order/changeOrderStage');
const checkIfUserIsAdmin = require('../middlewares/checkIfUserIsAdmin');

router.post('/', creteOrder);
router.get(
  '/user/all',
  passport.authenticate('jwt', { session: false }),
  getAllOrdersByEmail
);
router.post(
  '/:orderId',
  passport.authenticate('jwt', { session: false }),
  checkIfUserIsAdmin,
  changeOrderStage
);

module.exports = router;
