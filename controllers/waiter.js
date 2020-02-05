const Waiter = require("../models").Waiters;

module.exports = {
   test(req, res) {
    return res.status(200).json({ message: "waiter route test" });
  },
  create(req, res) {
     return Waiter
         .create({
           FName: req.body.FName,
           LName: req.body.LName,
           tableNumber: req.body.tableNumber,
           pin: req.body.pin,
           clockInTime: req.body.clockInTime,
           clockOutTime: req.body.clockOutTime
         })
         .then(newWaiter => res.status(200).json(newWaiter))
         .catch(e => res.status(400).json(e));
  },
  destroy(req, res) {
     return Waiter
         .find({
           where: {
             id: req.params.id
           }
         })
         .then(waiter => {
           if(!waiter){
             return res.status(404).send({
               message: 'waiter now found',
             });
           }
           return waiter
               .destroy()
               .then(() => res.status(200).send({ message: `waiter ${waiter.id} deleted successfully` }))
               .catch(e => res.status(400).send(e));
         });
  }

};
