'use strict';
const Table = require('../models').tables;
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    item: {
     type: DataTypes.STRING,
     allowNull: true
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price: {
     type: DataTypes.DECIMAL,
      allowNull: true
    },
    tableId: {
     type: DataTypes.UUID,
     allowNull: true
    }
  }, {});
  orders.associate = function(models) {

  };
  return orders;
};
