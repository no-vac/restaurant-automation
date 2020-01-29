'use strict';
module.exports = (sequelize, DataTypes) => {
  const Waiters = sequelize.define('Waiters', {
    FName: DataTypes.STRING,
    LName: DataTypes.STRING,
    tableNumber: DataTypes.INTEGER,
    pin: DataTypes.STRING,
    clockInTime: DataTypes.DATE,
    clockOutTime: DataTypes.DATE
  }, {});
  Waiters.associate = function(models) {
    // associations can be defined here
  };
  return Waiters;
};