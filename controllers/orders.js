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
        return orderServices
            .listOrders()
            .then(order => {
                return res.status(200).json(order)
            })
            .catch(e => {
                return res.status(400).json(e)
            })
    },
    listPerId(req, res){
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
    destroy(req, res){
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
    update(req, res){
       const { id, tem, comments, price, status } = req.body;

       return orderServices
           .updateOrder(id, tem, comments, price, status)
           .then( () => {
               return res.status(200).json({ msg: 'order updated'})
           })
           .catch(e => {
               return res.status(400).json({
                   msg: 'something went wrong',
                   e
               })
           })
    }
};
