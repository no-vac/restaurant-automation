'use strict';
module.exports = (sequelize, DataTypes) => {
  const tables = sequelize.define('tables', {
    total: DataTypes.DECIMAL,
    waiterId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  tables.associate = function(models) {
    // associations can be defined here
  };
  return tables;
};