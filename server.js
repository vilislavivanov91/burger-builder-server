const express = require('express');
const mongoose = require('mongoose');
const app = express();

const { monogURL, port } = require('./config/keys');
const homeRouter = require('./routes/home');
const orderRouter = require('./routes/order');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/', homeRouter);
app.use('/order', orderRouter);

mongoose.connect(monogURL, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Mongoose connected');
    app.listen(port, () => {
      console.log('App up and running at port: ' + port);
    });
  }
});
