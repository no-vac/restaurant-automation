// Moved all of this to the user controller, Waiter is now a role

const Waiter = require("../models").Waiters;

module.exports = {
    test(req, res) {
        return res.status(200).json({message: "waiter route test"});
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
    list(req, res) {
        return Waiter
            .findAll()
            .then(waiters => res.status(200).json(waiters))
            .catch(e => res.status(400).json(e))
    },
    destroy(req, res) {
        return Waiter
            .findOne({
                Where: {
                    id: req.params.id
                }
            })
            .then(waiter => {
                if (!waiter) {
                    return res.status(404).json({message: `waiter with the id ${waiter.FName} does not exist`});
                }
                return waiter
                    .destroy()
                    .then(() => res.status(200).json({message: `Deleted successfully`}))
                    .catch(e => res.status(400).json(e));
            })
            .catch(e => res.status(400).json(e));
    },
    update(req, res) {
        return Waiter
            .findByPk(req.params.id)
            .then(updatedWaiter => {
                if (!updatedWaiter) {
                    return res.status(404).json({msg: 'no waiter found'})
                }

                return updatedWaiter
                    .update({
                        FName: req.body.FName || updatedWaiter.FName,
                        LName: req.body.LName || updatedWaiter.LName,
                        Username: req.body.Username || updatedWaiter.Username,
                        pin: req.body.pin || updatedWaiter.pin,
                    })
                    .then(() => res.status(200).json(updatedWaiter))
                    .catch((error) => res.status(400).json(error));
            })
            .catch((error) => res.status(400).json(error));
    }
};
