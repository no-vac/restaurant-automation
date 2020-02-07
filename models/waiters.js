'use strict';
module.exports = (sequelize, DataTypes) => {
  const Waiters = sequelize.define('Waiters', {
    FName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tableNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    clockInTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    clockOutTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {});
  Waiters.associate = function(models) {
    // associations can be defined here
  };
  return Waiters;
};