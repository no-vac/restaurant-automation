'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
          queryInterface.addColumn(
              'orders',
              'status',
              {
                type: Sequelize.STRING,
                allowNull: true
              },{transaction: t})
      ]);
    });
  },

  down: (queryInterface) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
          queryInterface.removeColumn('orders', 'status', {transaction: t})
      ]);
    });
  }
};


