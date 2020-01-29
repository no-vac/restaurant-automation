const waiterController = require('./controllers').waiter;

module.exports = router => {
  router.get("/", (req, res) => {
    res.status(200).json("HELLO");
  });

  router.post('/api/newWaiter', waiterController.create);
};
