const Waiter = require("../models").Waiters;

module.exports = {
   test(req, res) {
    return res.status(200).json({ message: "waiter route test" });
  },
  create(req, res) {
    return Waiter
        .create({
            // FName: req.body.FName,
            // LName: req.body.LName,
            // tableNumber: req.body.tableNumber,
            // pin: req.body.pin,
            // clockInTime: req.body.clockInTime,
            // clockOutTime: req.body.clockOutTime,

            //this works if it is hard coded but it does not work if we try to pull it from the body data
            FName: "test",
            LName: "test",
            tableNumber: 25,
            pin: "0245",
            clockInTime: "2020-01-01",
            clockOutTime: "2020-01-01",
        })
        .then(waiter => res.status(200).json(waiter))
        .catch(e => res.status(400).json(e));
  },
  destroy(req, res) {
     return Waiter
         .findByPk(req.params.id)
         .then(waiter => {
             if(!waiter){
                 return res.status(404).json({ message: `waiter with the id ${req.params.id} does not exist` });
             }
             return waiter
                 .destroy()
                 .then(() => res.status(200).json({ message: `${waiter.FName} was delete successfully` }))
                 .catch(e => res.status(400).json(e));
         })
         .catch(e => res.status(400).json(e));
  }
};
