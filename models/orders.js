'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    item: DataTypes.STRING,
    comments: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    status: DataTypes.STRING,
    tableId: DataTypes.INTEGER
  }, {});
  orders.associate = function(models) {
    // associations can be defined here
  };
  return orders;
};