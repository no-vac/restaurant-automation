'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    Username: DataTypes.STRING,
    Password: DataTypes.STRING,
    Role: DataTypes.STRING,
    PhoneNumber: DataTypes.STRING,
    Email: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};