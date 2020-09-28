const express = require('express');
const router = express.Router();

const creteOrder = require('../controllers/createOrder');
const getAllOrders = require('../controllers/getAllOrders');

router.post('/', creteOrder);
router.get('/all', getAllOrders);

module.exports = router;
