const Burger = require('../model/Burger');

const createBurger = (req, res, next) => {
  console.log(req.body);
  const { errors, isValid } = require('../validation/createBurger')(req.body);

  if (!isValid) {
    return res.status(404).json(errors);
  }

  const burger = new Burger({
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

  burger
    .save()
    .then((burger) => {
      return res.json(burger);
    })
    .catch((err) => console.log(err));
};

module.exports = createBurger;
