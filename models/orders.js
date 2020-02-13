'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    item: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  orders.associate = function(models) {
    orders.belongsTo(models.Table, {
      foreignKey: 'tableId',
      as: "tableOrder"
    })
  };
  return orders;
};