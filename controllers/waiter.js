const Waiter = require("../models").Waiters;
const Table = require("../models").Tables;

module.exports = {
   test(req, res) {
    return res.status(200).json({ message: "waiter route test" });
  },
  create(req, res) {
    return Waiter
        .create({
            FName: req.body.FName,
            LName: req.body.LName,
            pin: req.body.pin,
            clockInTime: req.body.clockInTime,
            clockOutTime: req.body.clockOutTime,
            Username: req.body.Username
        })
        .then(waiter => res.status(200).json(waiter))
        .catch(e => res.status(400).json(e));
  },
  list(req, res){
    return Waiter
        .findAll({
            include:[{
                model: Table,
                as: 'TableNumber'
            }]
        })
        .then(waiters => res.status(200).json(waiters))
        .catch(e => res.status(400).json({ message: "something went wrong" }))
  },
  destroy(req, res) {
     return Waiter
         .findOne({
             Where: {
                 Username: req.body.Username
             }
         })
         .then(waiter => {
             if(!waiter){
                 return res.status(404).json({ message: `waiter with the id ${waiter.FName} does not exist` });
             }
             return waiter
                 .destroy()
                 .then(() => res.status(200).json({ message: `Deleted successfully` }))
                 .catch(e => res.status(400).json(e));
         })
         .catch(e => res.status(400).json(e));
  }
};
