const Waiter = require("../models").Waiter;

module.exports = {
  async test(req, res) {
    return await res.status(200).json({ message: "waiter route test" });
  },
  async create(req, res) {
    try {
      const waiter = await Waiter.create({
        FName: req.body.FName,
        LName: req.body.LName,
        tableNumber: req.body.tableNumber,
        pin: req.body.pin,
        clockInTime: req.body.clockInTime,
        clockOutTime: req.body.clockOutTime
      });

      res.status(200).json(waiter);
    } catch (err) {
      res.status(400).send(err, { message: "something went wrong" });
    }
  }
};
