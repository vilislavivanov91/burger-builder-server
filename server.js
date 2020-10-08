const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const passport = require('passport');

const { monogURL, port } = require('./config/keys');
const homeRouter = require('./routes/home');
const orderRouter = require('./routes/order');
const authRouter = require('./routes/auth');

mongoose.connect(monogURL, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Mongoose connected');
    // Connect middlewares
    app.use(express.json()); // for parsing application/json
    app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    app.use(cors()); // enabling CORS policy
    app.use(passport.initialize()); // initialize passport
    require('./config/passportConfig')(passport); // configure passport

    // connect routes
    app.use('/', homeRouter);
    app.use('/order', orderRouter);
    app.use('/auth', authRouter);

    app.listen(port, () => {
      console.log('App up and running at port: ' + port);
    });
  }
});
