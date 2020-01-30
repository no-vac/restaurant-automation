const Waiter = require("../models").Waiter;

module.exports = {
  test: async (req, res) => {
    return res.status(200).json({ message: "waiter route test" });
  },
  create: async (req, res) => {
    try {
      const waiter = await Waiter.create({
        FName: req.body.FName,
        LName: req.body.LName,
        tableNumber: req.body.tableNumber,
        pin: req.body.pin,
        clockInTime: req.body.clockInTime,
        clockOutTime: req.body.clockOutTime
      });

      return res.status(200).json(waiter);
    } catch (err) {
      return res.status(400).send(err, { message: "something went wrong" });
    }
  }
};
