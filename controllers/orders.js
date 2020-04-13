const orderServices = require('../services/order/orderServices');

module.exports = {
    create(req, res) {
        const { item, comments, price, status, tableId } = req.body;

        return orderServices
            .createOrder(item, comments, price, status, tableId)
            .then(order => {
                return res.status(200).json(order)
            })
            .catch(e => {
                return res.status(400).json(e)
            })
    },
    list(req, res){
        const {id, tableId} = req.body;

        return orderServices
            .listOrdersWithTable(id, tableId)
            .then(order => {
                return res.status(200).json(order);
            })
            .catch(e => {
                return res.status(400).json(e);
            })
    },
    listPerId(req, res){
        // list order per Id
    },
    listPerTableId(req, res){
       // show orders per table
    },
    destroy(req, res){
       // delete order
    },
    update(req, res){
       // update order
    }
};
