const db = require("../../config/db");

module.exports = {
    createOrder: (item, comments, price, status, tableId) => new Promise((resolve, reject) => {
        db.insert({
            item,
            comments,
            price,
            status,
            tableId
        }).returning('*').into('orders').then(data => {
            return resolve(data[0])
        }).catch(e => reject(e))
    }),
    listOrders: () => new Promise((resolve, reject) => {
        db.table('orders')
            .innerJoin('tables', 'tableId', '=', 'tables.id')
            .then(data => {
                console.log(data);
                return resolve(data);
            })
            .catch(e => {
                return reject(e);
            })
    }),
    listOrdersWithTable: (id, tableId) => new Promise((resolve, reject) => {
        db.table('orders')
            .innerJoin('tables', tableId, '=', 'tables.id')
            .then(data => {
                return resolve(data);
            })
            .catch(e => {
                return reject(e);
            })
    }),
    deleteOrder: (id) => new Promise((resolve, reject) => {
        db.select('*')
            .from('orders')
            .where('id', '=', id)
            .then((data) => {
                if(data[0] !== undefined || data[0] !== null) {
                    return db.select('id')
                        .from('orders')
                        .where('id', '=', id)
                        .del()
                        .then(order => resolve({ order, msg: 'order deleted' }))
                        .catch(e => reject(e));
                }
                return reject({msg: 'something went wrong'});
            })
    }),
    updateOrder: (id, item, comments, price, status) => new Promise((resolve, reject) => {
        db.select('*')
            .from('orders')
            .where('id', '=', id)
            .update({
                item,
                comments,
                price,
                status
            })
            .then((data) => {
                return resolve(data);
            })
            .catch(e => {
                reject(e);
            })
    })
};
