const userServices = require('../services/user/userServices');
const auth = require('../auth');
const session = require('express-session');
const User = require('../models').users;

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
            .catch(e => res.status(400).json({ msg: 'you fucked up', e }))
    },
    getUser(req, res) {
        const { username } = req.body;

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
    updateUser(req, res){
        const { id, username, password, email, role, phoneNumber } = req.body;
        return userServices
            .updateUser(id, username, password, email, role, phoneNumber)
            .then(updatedUser => {
                return res.status(200).json({
                    msg: 'user updated',
                    updatedUser
                })
            })
            .catch(e => res.status(400).json({
                msg: 'you dont fucked up dawg',
                e
            }))
    },
    perRole(req, res){
        const { role } = req.body;

        return userServices
            .getUserPerRole(role)
            .then(users => {
                return res.status(200).json(users)
            })
            .catch(e => res.status(500).json(e))
    },
    login(req, res) {
        const { username, password } = req.body;

        return userServices
            .loginUser(username, password)
            .then(user => {
                const data = auth.createJWT(user.id);
                req.session.AuthToken = data;
                return res.status(200).json({
                    Token: data,
                    user
                })
            })
            .catch(e => res.status(400).json({
                msg: 'you done fucked up',
                e
            }))
    },
    logout(req, res) {
        const { id, username } = req.body;

        return userServices
            .logoutUser(id, username)
            .then(user => {
                return res.status(200).json({msg: 'logged out', user})
            })
            .catch(e => res.status(400).json(e))
    },
    destroy(req, res) {
        const { id, username } = req.body;

        return userServices
            .deleteUser(id, username)
            .then(user => {
                return res.status(200).json({user, msg: 'user deleted'})
            })
            .catch(e => res.status(400).json(e))
    },
};
