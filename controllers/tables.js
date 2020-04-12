const tableServices = require('../services/table/tableServices');

module.exports = {
    create(req, res) {
        const { waiterId, orderId, status, total } = req.body;

        return tableServices
            .createTable(waiterId, orderId, status, total)
            .then(table => {
                return res.status(200).json(table)
            })
            .catch(e => res.status(400).json(e))
    },
    list(req, res) {
        return tableServices
            .getTables()
            .then(tables => {
                return res.status(200).json(tables)
            })
            .catch(e => res.status(400).json(e))
    },
    table(req, res){
        const { id } = req.body;

        return tableServices
            .getTableById(id)
            .then(table => {
                return res.status(200).json(table)
            })
            .catch(e => {
                return res.status(400).json(e)
            })
    },
    update(req, res){
        // update the table information
    },
    destroy(req, res) {
        // delete the tables information
    },
};
