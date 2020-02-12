const Table = require("../models").Table;
const Waiter = require("../models").Waiters;

module.exports = {
    create(req, res) {
        return Table
            .create({
                TableNumber: req.body.TableNumber,
                Orders: req.body.Orders,
                Total: req.body.Total,
                waiterId: req.params.waiterId
            })
            .then(newTable => {
                Waiter
                    .findOne({
                        where: {
                            id: req.params.waiterId
                        }
                    })
                    .then(waiter => {
                        return waiter
                            .update({
                                tableId: newTable.TableNumber,
                            })
                            .then(() => res.status(200).json(newTable))
                            .catch(e => res.status(400).json(e))
                    })
                    .catch(e => res.status(400).json(e));
            })
            .catch(e => res.status(400).json(e));
    },
    list(req, res) {
        return Table
            .findAll()
            .then(tables => res.status(200).json(tables))
            .catch(e => res.status(400).json(e));
    },
    destroy(req, res) {
        return Table
            .findOne({
                where: {
                    id: req.body.id
                }
            }).then(table => {
                if (!table) {
                    return res.status(404).json({
                        message: 'no tables found'
                    });
                }
                return table
                    .destroy()
                    .then(() => res.status(200).json({message: 'Deleted successfully'}))
                    .catch(e => res.status(400).json(e))
            })
            .catch(e => res.status(400).json(e))
    },
}