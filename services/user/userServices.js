const bcrypt = require('bcryptjs');
const knex = require('knex');
const auth = require('../../auth');

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
    createUser: ( Username, Password, Role, Email, PhoneNumber ) => new Promise((resolve, reject) => {
        //const hash = bcrypt.hashSync(Password, 10);
        db.transaction(trx => {
            trx.insert({
                Username,
                Password,
                Role,
                Email,
                PhoneNumber
            }).into('users').returning('*').then(data => resolve(data[0])).then(trx.commit).catch(trx.rollback)
        }).catch(e => reject(e))
    }),
    getUser: (username) => new Promise((resolve, reject) => {
        db.select('Username')
            .from('users')
            .where('Username', '=', username)
            .then((data) => {
                return db
                    .select('*')
                    .from('users')
                    .where('Username', '=', username)
                    .then(user => resolve(user[0]))
                    .catch(e => reject(e))
            })
            .catch(e => reject(e))
    }),
    getAllUsers: () => new Promise((resolve, reject) => {
       db.select('*')
           .from('users')
           .then(users => resolve(users))
           .catch(e => reject(e))
    }),
    updateUser: (id, username, password, email, role, phoneNumber, authToken) => new Promise((resolve, reject) => {
        const hash = bcrypt.hashSync(password, 10);
        db.select('*')
            .from('users')
            .where('id', '=', id)
            .update({
                Username: username,
                Password: hash,
                Email: email,
                Role: role,
                PhoneNumber: phoneNumber,
                AuthToken: authToken
            })
            .then(result => resolve(result))
            .catch(e => reject({ msg: 'from services', e }))
    }),
    loginUser: (username, password) => new Promise((resolve, reject) => {
        db.select('*')
            .from('users')
            .where('Username', '=', username)
            .then((data) => {
                const token = auth.createJWT(data[0].id);
                const validPassword = bcrypt.compareSync(password, data[0].Password);
                console.log(data[0].AuthToken);

                if(validPassword){
                    if(data[0].AuthToken == null) {
                        db.select('AuthToken')
                            .from('users')
                            .where('id', '=', data[0].id)
                            .update({
                                AuthToken: token
                            })
                            .then(result => resolve(result))
                            .catch(e => reject(e))
                    }
                    return db.select('*')
                        .from('users')
                        .where('id', '=', data[0].id)
                        .then(user => resolve(user[0]))
                        .catch(e => reject(e))
                }
                return reject({ msg: 'Wrong Password' });
            })
            .catch(e => reject(e))
    }),
    logoutUser: (id, username) => new Promise((resolve, reject) => {
        db.select('*')
            .from('users')
            .where('Username', '=', username)
            .then((data) => {
                if(data[0].AuthToken != null){
                    return db.select('AuthToken')
                        .from('users')
                        .where('id', '=', data[0].id)
                        .update({
                            AuthToken: null
                        })
                        .then(result => resolve({result, msg: 'logged out'}))
                        .catch(e => reject(e))
                }
                return reject({msg: 'user not logged in'})
            })
            .catch(e => reject(e));
    }),
    getUserPerRole: (role) => new Promise((resolve, reject) => {
        db.select('Username', 'Email', 'PhoneNumber')
            .from('users')
            .where('Role', '=', role)
            .then(users => { return resolve(users) })
            .catch(e => reject(e))
    }),
    deleteUser: (id, username) => new Promise((resolve, reject) => {
        db.select('id', 'Username')
            .from('users')
            .where('id', '=', id).andWhere('Username', '=', username)
            .then(data => {
                console.log(data[0] === undefined);
                if(data[0] !== undefined) {
                    return db.select('id', 'Username')
                        .from('users')
                        .where('id', '=', id).andWhere('Username', '=', username)
                        .del()
                        .then(user => resolve({user, msg: 'user deleted'}))
                        .catch(e => reject(e))
                }
                return reject({ msg: 'user does not exist' })
            })
            .catch(e => reject(e))
    })
};
