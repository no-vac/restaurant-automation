'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    Username: {
      field: 'Username',
      type: DataTypes.STRING,
      unique: {
        name: 'Username',
        msg: 'Email is already taken'
      }
    },
    Password: {
      field: 'Password',
      type: DataTypes.STRING
    },
    Email: {
      field: 'Email',
      type: DataTypes.STRING
    },
    Role: {
      field: 'Role',
      type: DataTypes.STRING
    },
    PhoneNumber: {
      field: 'PhoneNumber',
      type: DataTypes.STRING
    },
    AuthToken: {
      field: 'AuthToken',
      type: DataTypes.STRING
    }
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};
