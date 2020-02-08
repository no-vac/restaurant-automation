const Table = require("../models").Tables;

module.export = {
    create(req, res){
        return Table
            .create({
                TableNumber: req.body.TableNumber,
                Orders: ['orders', 'test', 'why'],
                Total: req.body.Total,
                waiterId: req.params.waiterId
            })
            .then(newTable => res.status(200).json(newTable))
            .catch(e => res.status(400).json(e));
    }
}