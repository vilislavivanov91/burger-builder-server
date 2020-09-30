const Order = require('../model/Order');

const createOrder = (req, res, next) => {
  const { errors, isValid } = require('../validation/createOrder')(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const order = new Order({
    ingredients: {
      meat: +req.body.meat,
      bacon: +req.body.bacon,
      salad: +req.body.salad,
      cheese: +req.body.cheese,
    },
    price: +req.body.price,
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    postalCode: req.body.postalCode,
  });

  order
    .save()
    .then((order) => {
      return res.json(order);
    })
    .catch((err) => console.log(err));
};

module.exports = createOrder;
