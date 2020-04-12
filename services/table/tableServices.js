const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        port: '3000',
        password: 'admin',
        database: 'Restaurant'
    }
});

module.exports = {
    createTable: (waiterId, orderId, status, total) => new Promise((resolve, reject) => {
        db.insert({
            waiterId,
            orderId,
            status,
            total
        }).returning('*').into('tables').then(data => {
            return resolve(data[0])
        }).catch(e => reject(e))
    }),
    getTables: () => new Promise((resolve, reject) => {
        db.select('*')
            .from('tables')
            .then(tables => resolve(tables))
            .catch(e => reject(e))
    }),
    getTableById: (tableId) => new Promise((resolve, reject) => {
        db.select('*')
            .from('tables')
            .where('id', '=', tableId)
            .then(data => {
                console.log(data[0]);
                return resolve(data[0]);
            })
            .catch(e => reject(e))
    }),
    updateTable: (id, waiterId, orderId, status, total) => new Promise((resolve, reject) => {

    })
};
