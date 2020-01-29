const Waiter = require("../models").Waiter;

module.exports = {
  test(req, res) {
    return res.status(200).json({ message: "waiter route test" });
  },
  create(req, res) {
    return Waiter.create({
      FName: req.body.FName,
      LName: req.body.LName,
      tableNumber: req.body.tableNumber,
      pin: req.body.pin,
      clockInTime: req.body.clockInTime,
      clockOutTime: req.body.clockOutTime
    })
      .then(newWaiter => res.status(200).send(newWaiter))
      .catch(err =>
        res.status(400).send(err, { message: "something went wrong" })
      );
  }
};
