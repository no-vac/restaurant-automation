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
        return orderServices
            .createOrder(orderinfo)
            .then(order => {
                return res.status(200).json(order)
            })
            .catch(error => {
                return res.status(400).json({ error: error.message });
            })
    },
    list(req, res) {
        return orderServices
            .listOrders()
            .then(order => {
                return res.status(200).json(order)
            })
            .catch(error => {
                return res.status(400).json({ error: error.message });
            })
    },
    listPerTableId(req, res) {
        const { tableId } = req.params;

        return orderServices
            .listOrdersWithTable(tableId)
            .then(orders => {
                return res.status(200).json(orders);
            })
            .catch(error => {
                return res.status(400).json({ error: error.message });
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
            .catch(error => {
                return res.status(400).json({ error: error.message });
            })
    },
    update(req, res) {
        const { id, item, comments, price, status, tableId } = req.body;
        console.log("status: " + status);
        const orderInfo = {
            id,
            item,
            comments,
            price,
            status,
            tableId
        }
        console.log('updated order', orderInfo);
        return orderServices
            .updateOrder(orderInfo)
            .then(() => {
                return res.status(200).json({ msg: 'order updated' })
            })
            .catch(error => {
                return res.status(400).json({ error: error.message });
            })
    }
};
