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
      wage: {
        type: Sequelize.DECIMAL
      },
      hoursWorked: {
        type: Sequelize.DECIMAL
      },
      totalWage: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('payrolls');
  }
};
