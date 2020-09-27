const express = require('express');
const router = express.Router();

const createBurger = require('../controllers/createBurger');

router.post('/', createBurger);

module.exports = router;
