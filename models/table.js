'use strict';
module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define('Table', {
    TableNumber: DataTypes.INTEGER,
    Orders: {
      type: DataTypes.ENUM,
      values: ['test'],
    },
    Total: DataTypes.INTEGER
  }, {});
  Table.associate = function(models) {
    Table.belongsTo(models.waiter, {
      foreignKey: 'waiterId',
      onDelete: 'CASCADE'
    })
  };
  return Table;
};