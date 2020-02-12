'use strict';
module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define('Table', {
    TableNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Orders: {
      type: DataTypes.ENUM,
      values: ['test'],
      allowNull: true
    },
    Total: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Table.associate = function(models) {
    Table.belongsTo(models.Waiters, {
      foreignKey: 'waiterId',
      onDelete: 'CASCADE'
    })
  };
  return Table;
};