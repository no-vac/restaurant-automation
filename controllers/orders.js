const Order = require('../models').orders;

module.exports = {
     create(req, res) {
        return Order
            .create({
                item: req.body.item,
                comments: req.body.item,
                price: req.body.price
            })
            .then(order => res.status(200).json(order))
            .catch(e => res.status(400).json(e));
    }
}