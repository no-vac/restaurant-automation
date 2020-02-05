const Waiter = require("../models").Waiters;
const wrap = require("../middleware/asyncWrapper");

module.exports = {
  test: async (req, res) => {
    return res.status(200).json({ message: "waiter route test" });
  },
  create: async (req, res) => {
    try {
      console.log("this place reached");
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
