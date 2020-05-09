'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('payrolls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      clockInTime: {
        type: Sequelize.DATE
      },
      clockOutTime: {
        type: Sequelize.DATE
      },
      hoursWorked: {
        type: Sequelize.REAL
      },
      totalWage: {
        type: Sequelize.REAL
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('payrolls');
  }
};
