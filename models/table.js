'use strict';
module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define('Table', {
    Total: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Table.associate = function(models) {
    Table.belongsTo(models.Waiters, {
      foreignKey: 'waiterId'
    });

    // Table.hasMany(models.Orders, {
    //   as:'orders'
    // });
  };
  return Table;
};