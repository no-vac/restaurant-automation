const userServices = require('../services/user/userServices');
const payrollServices = require('../services/payroll/payrollServices');
const auth = require('../auth');
const bcrypt = require("bcryptjs");
const { SECURE_KEY_JWT } = process.env;
let jwt = require('jsonwebtoken');

module.exports = {
    create(req, res) {
        const userinfo = { username, password, role, phoneNumber, email } = req.body;
        console.log(userinfo);
        userServices
            .getUser(userinfo)
            .then(user => {
                if (user) {
                    return res.status(400).json({
                        msg: 'Username already in use'
                    });
                }
                return userServices
                    .createUser(userinfo)
                    .then(user => {
                        return res.status(200).json({
                            user
                        });
                    })
                    .catch(e => res.status(400).json({ error: e }))

            })
            .catch(e => {
                return res.status(400).json({ error: e })
            });
    },
    getCurrent(req, res) {
        if (!req.user) {
            return res.status(400).json({ error: "no user" })
        }
        return res.status(200).json(req.user);
    },
    list(req, res) {
        return userServices
            .getAllUsers()
            .then(users => {
                return res.status(200).json(users)
            })
            .catch(e => res.status(400).json(e))
    },
    updateUser(req, res) {
        const { id, username, email, role, phoneNumber, wage } = req.body;
        const userinfo = {
            id,
            username,
            email,
            role,
            phoneNumber,
            wage
        }
        console.log("controller info", userinfo);
        return userServices
            .updateUser(userinfo)
            .then(() => {
                return res.status(200).json({
                    msg: 'user updated',
                })
            })
            .catch(e => {
                return res.status(400).json({
                    msg: 'you dont fucked up dawg',
                    e
                })
            })
    },
    login(req, res) {
        const userInfo = { username, password } = req.body;

        userServices
            .getUser(userInfo)
            .then(user => {
                const payload = {};
                if (bcrypt.compareSync(password, user.password)) {
                    //clock in
                    const userInfo = {
                        userId: user.id,
                        clockInTime: new Date(Date.now()),
                    };
                    payrollServices.create(userInfo).then(listing => {
                        payload.user = {
                            id: user.id,
                            payrollId: listing.id,
                            username: user.username,
                            role: user.role,
                            email: user.email,
                            phoneNumber: user.phoneNumber
                        };
                        const data = auth.createJWT(payload.user);
                        payload.Token = 'Bearer ' + data;

                        return res.status(200).json(payload)
                    }).catch(error => {
                        console.warn(error);
                        return res.status(400).json({ error: error.message });
                    })
                } else {
                    return res.status(400).json("wrong password");
                }
            })
            .catch(e => {
                console.log(e);
                res.status(400).json({
                    msg: 'you done fucked up',
                    e
                })
            })
    },
    destroy(req, res) {
        const { id, username } = req.body;

        return userServices
            .deleteUser(id, username)
            .then(() => {
                return res.status(200).json({ msg: 'user deleted' })
            })
            .catch(e => res.status(400).json(e))
    },
};