'use strict';
const Orders = require('../models').orders;
module.exports = (sequelize, DataTypes) => {
  const tables = sequelize.define('tables', {
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    waiterId: {
     type: DataTypes.UUID,
     allowNull: true
    },
    orderId: {
      type: DataTypes.UUID,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {});
  tables.associate = function(models) {

  };
  return tables;
};
