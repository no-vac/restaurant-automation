'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      Username: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Role: {
        type: Sequelize.STRING
      },
      PhoneNumber: {
        type: Sequelize.STRING
      },
      AuthToken: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, /* Sequelize */) => {
    return queryInterface.dropTable('users');
  }
};
