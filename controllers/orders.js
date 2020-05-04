const orderServices = require('../services/order/orderServices');

module.exports = {
    create(req, res) {
        const { item, comments, tableId } = req.body;

        //search item in menu table and get item info
        const price = 2.5;
        const orderinfo = {
            item,
            comments,
            price,
            status: "Cool",
            tableId
        }
        console.log(orderinfo);

        return orderServices
            .createOrder(orderinfo)
            .then(order => {
                return res.status(200).json(order)
            })
            .catch(e => {
                return res.status(400).json(e)
            })
    },
    list(req, res) {
        return orderServices
            .listOrders()
            .then(order => {
                return res.status(200).json(order)
            })
            .catch(e => {
                return res.status(400).json(e)
            })
    },
    listPerId(req, res) {
        const { id } = req.params;

        return orderServices
            .listOrdersWithTable(id)
            .then(order => {
                return res.status(200).json(order);
            })
            .catch(e => {
                return res.status(400).json(e);
            })
    },
    destroy(req, res) {
        const { id } = req.body;

        return orderServices
            .deleteOrder(id)
            .then(() => {
                return res.status(200).json({
                    msg: 'order deleted'
                })
            })
            .catch(e => {
                return res.status(400).json({
                    msg: 'you done fucked up',
                    e
                })
            })
    },
    update(req, res) {
        const orderinfo = { id, item, comments, price, status } = req.body;

        return orderServices
            .updateOrder(orderinfo)
            .then(() => {
                return res.status(200).json({ msg: 'order updated' })
            })
            .catch(e => {
                return res.status(400).json({
                    msg: 'something went wrong',
                    e
                })
            })
    }
};
