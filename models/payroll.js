'use strict';
module.exports = (sequelize, DataTypes) => {
  const payroll = sequelize.define('payroll', {
    userId: DataTypes.INTEGER,
    clockInTime: DataTypes.DATE,
    clockOutTime: DataTypes.DATE,
    wage: DataTypes.DECIMAL,
    hoursWorked: DataTypes.DECIMAL,
    totalWage: DataTypes.DECIMAL,
  }, {});
  payroll.associate = function (models) {
    // associate
  };
  return payroll;
};
