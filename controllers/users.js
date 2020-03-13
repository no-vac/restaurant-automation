const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');

const User = require('../models').users;

module.exports = {
    create(req, res) {
        const {Username, Password, Role, PhoneNumber, Email} = req.body;
        const hash = bcrypt.hashSync(Password, 10);

        return User
            .create({
                Username: Username,
                Password: hash,
                Role: Role,
                PhoneNumber: PhoneNumber,
                Email: Email
            })
            .then(user => res.status(200).json(user))
            .catch(e => res.status(400).json(e));
    },
    list(req, res) {
        return User
            .findAll()
            .then(users => res.status(200).json(users))
            .catch(e => res.status(400).json(e));
    },
    destroy(req, res) {
        return User
            .findOne({
                Where: {
                    id: req.params.id,
                }
            })
            .then(user => {
                if (!user) {
                    return res.status(404).json({msg: 'Something went wrong'});
                }

                return user
                    .destroy()
                    .then(() => res.status(200).json({msg: 'Deleted '}))
                    .catch(e => res.status(400).json(e));
            })
            .catch(e => res.status(400).json(e));
    },
    update(req, res) {
        return User
            .findOne({
                Where: {
                    id: req.params.id
                }
            })
            .then(user => {
                if (!user) {
                    return res.status(404).json({msg: 'no user found'})
                }
                const {Username, Password, Role, PhoneNumber, Email} = req.body;

                return user
                    .update({
                        Username: Username || user.Username,
                        Password: Password || user.Password,
                        Role: Role || user.Role,
                        PhoneNumber: PhoneNumber || user.PhoneNumber,
                        Email: Email || user.Email
                    })
                    .then(updatedUser => {
                        return res.status(200).json(updatedUser)
                    })
                    .catch(e => res.status(400).json(e))
            })
            .catch(e => res.status(400).json(e))
    },
    perRole(req, res){
      return User
          .findAll({
             where: {
                 Role: req.body.Role
             }
          })
          .then(waiters => res.status(200).json(waiters))
          .catch(e => res.status(200).json(e));

    },
    login(req, res, next) {
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
                } else {
                    res.status(400).json({msg: "wrong password"});
                }
            })
            .catch(e => res.status(200).json(e))

    }
};
