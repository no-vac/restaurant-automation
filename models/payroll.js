'use strict';
module.exports = (sequelize, DataTypes) => {
  const payroll = sequelize.define('payroll', {
    timeIn: {
      type: DataTypes.DATE,
      allowNull: false
    },
    timeOut: {
      type: DataTypes.DATE,
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hourlyRate: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    payPeriodAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {});
  payroll.associate = function(models) {
    // associations can be defined here
  };
  return payroll;
};
