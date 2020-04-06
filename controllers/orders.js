const Order = require('../models').orders;

module.exports = {
     create(req, res) {
         const { item, comments, price } = req.body;

        return Order
            .create({
                item: item,
                comments: comments,
                price: price
            })
            .then(order => res.status(200).json(order))
            .catch(e => res.status(400).json(e));
    },
    list(req, res){
         return Order
             .findAll()
             .then(table => res.status(200).json(table))
             .catch(e => res.status(400).json(e))
    },
    listPerId(req, res){
      return Order
          .findOne({
              Where: {
                  id: req.params.id
              }
          })
          .then(order => {
              if(!order){
                  return res.status(404).json({msg: 'no order found'});
              }

              return res.status(200).json(order);
          })
          .catch(e => res.status(400).json(200));
    },
    listPerTableId(req, res){
         return Order
             .findAll({
                 Where:{
                     tableId: req.params.tableId
                 }
             })
             .then(order => res.status(200).json(order))
             .catch(e => res.status(400).json(e));
    },
    destroy(req, res){
         return Order
             .findOne({
                 Where: {
                     id: req.params.id
                 }
             })
             .then(order =>{
                 if(!order){
                     return res.status(404).json({msg: 'no order found'})
                 }

                 return order
                     .destroy()
                     .then(() => res.status(200).json({msg: 'order removed'}))
                     .catch(e => res.status(400).json(e))
             })
             .catch(e => res.status(400).json(e))
    },
    update(req, res){
         return Order
             .findOne({
                 Where: {
                     id: req.params.id
                 }
             })
             .then(order => {
                 if(!order){
                     return res.status(404).json({msg: 'there is no order with this ID'})
                 }
                 const { item, comments, price } = req.body;

                 return order
                     .update({
                         item: item || order.item,
                         comments: comments || order.comments,
                         price: price || order.price
                     })
                     .then(updatedOrder => res.status(200).json(updatedOrder))
                     .catch(e => res.status(400).json(e))
             })
             .catch(e => res.status(400).json(e));
    }
};
