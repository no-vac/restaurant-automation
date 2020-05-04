const db = require("../../config/db");

module.exports = {
    createOrder: (orderinfo) => new Promise((resolve, reject) => {
        const { item, comments, price, status, tableId } = orderinfo;
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
    listOrdersWithTable: (tableId) => new Promise((resolve, reject) => {
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
                if (data[0] !== undefined || data[0] !== null) {
                    return db.select('id')
                        .from('orders')
                        .where('id', '=', id)
                        .del()
                        .then(order => resolve({ order, msg: 'order deleted' }))
                        .catch(e => reject(e));
                }
                return reject({ msg: 'something went wrong' });
            })
    }),
    updateOrder: (orderinfo) => new Promise((resolve, reject) => {
        const { id, item, comments, status } = orderinfo;

        const payload = {};
        if (item) payload.item = item;
        if (status) payload.status = status;
        if (comments) payload.comments = comments;

        db.select('*')
            .from('orders')
            .where('id', '=', id)
            .update(payload)
            .then((data) => {
                return resolve(data);
            })
            .catch(e => {
                reject(e);
            })
    })
};
