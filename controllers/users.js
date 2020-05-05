const userServices = require('../services/user/userServices');
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
                if(user){
                    return res.status(400).json({
                        msg: 'Username already in use'
                    });
                }
                return userServices
                    .createUser(userinfo)
                    .then(user => {
                        console.log(user + ' ' + 'from here');
                        return res.status(200).json({
                            user
                        });
                    })
                    .catch(e => res.status(400).json({ msg: e }))

            })
            .catch(e => {
                return res.status(400).json({ error: e })
            });
    },
    checkAuth(req, res) {
        let token;
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
            token = req.headers.authorization.split(' ')[1];
        }

        if(!token) {
            return next(Error('Not authed'));
        }

        if(token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
            const decoded = auth.verifyJWT(token);


            return res.json({tokenGiven: token, decodedToken: decoded});
        }
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
        const userinfo = { id, username, password, email, role, phoneNumber } = req.body;
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
    perRole(req, res) {
        const { role } = req.params;

        return userServices
            .getUserPerRole(role)
            .then(users => {
                return res.status(200).json(users)
            })
            .catch(e => res.status(500).json(e))
    },
    login(req, res) {
        const userInfo = { username, password } = req.body;

        userServices
            .getUser(userInfo)
            .then(user => {
                if (bcrypt.compareSync(password, user.password)) {
                    const data = auth.createJWT(user.id, user.username, user.email, user.role);
                    return res.status(200).json({
                        Token: 'Bearer ' + data,
                        user: {
                            username: user.username,
                            role: user.role,
                            email: user.email,
                            phoneNumber: user.phoneNumber
                        }
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
