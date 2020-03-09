const bcrypt = require('bcryptjs');

const User = require('../models').users;

module.exports = {
    create(req, res) {
        const {Password} = req.body;
        const hash = bcrypt.hashSync(Password, 10);


        return User
            .create({
                Username: req.body.Username,
                Password: hash,
                Role: req.body.Role,
                PhoneNumber: req.body.PhoneNumber,
                Email: req.body.Email
            })
            .then(user => res.status(200).json(user))
            .catch(e => res.status(400).json(e));
    },
    login(req, res) {
        const {Password} = req.body;
        return User
            .findOne({
                where: {
                    Username: req.body.Username,
                },
            })
            .then(user => {
                if (!user) {
                    res.status(404).json({
                        msg: 'User not found'
                    });
                }

                if (bcrypt.compareSync(Password, user.Password) === true) {
                    res.status(200).json(user);
                }
            })
            .catch(e => res.status(200).json(e))

    }
};