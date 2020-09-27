const homeController = (req, res, next) => {
  return res.json({ msg: 'Hello from home controller' });
};

module.exports = {
  homeController,
};
