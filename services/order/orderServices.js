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
    })
};
