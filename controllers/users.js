const userServices = require('../services/user/userServices');
const auth = require('../auth');
const bcrypt = require("bcryptjs");

module.exports = {
    create(req, res) {
        const { username, password, role, phoneNumber, email } = req.body;
        return userServices
            .createUser(username, password, role, phoneNumber, email)
            .then(user => {
                console.log(user + ' ' + 'from here');
                return res.status(200).json({
                    user
                });
            })
            .catch(e => res.status(400).json({ msg: e }))
    },
    getUserById(req, res) {
        const { username } = req.params;

        return userServices
            .getUser(username)
            .then(user => {
                return res.status(200).json(user)
            })
            .catch(e => res.status(400).json(e))
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
        const { id, username, password, email, role, phoneNumber } = req.body;
        return userServices
            .updateUser(id, username, password, email, role, phoneNumber)
            .then(() => {
                return res.status(200).json({
                    msg: 'user updated',
                })
            })
            .catch(e => res.status(400).json({
                msg: 'you dont fucked up dawg',
                e
            }))
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
        const { username, password } = req.body;

        userServices
            .getUser(username)
            .then(user => {
                // return res.send(user);
                //compare password
                if (bcrypt.compareSync(password, user.password)) {
                    const data = auth.createJWT(user.id);
                    return res.status(200).json({
                        Token: data,
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
