'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tables', [
      {
        id: 1,
        total: 50,
        waiterId: 4,
        orderId: 1,
        status: "serving"
      }, {
        id: 2,
        total: 120.50,
        waiterId: 5,
        orderId: 1,
        status: "serving"
      },
      {
        id: 3,
        total: null,
        waiterId: 6,
        orderId: null,
        status: "dirty"
      }, {
        id: 4,
        total: null,
        waiterId: null,
        orderId: null,
        status: "clean"
      },
      {
        id: 5,
        total: null,
        waiterId: null,
        orderId: null,
        status: "clean"
      }, {
        id: 6,
        total: 100.50,
        waiterId: 4,
        orderId: 1,
        status: "serving"
      },
      {
        id: 7,
        total: 75,
        waiterId: 5,
        orderId: 1,
        status: "serving"
      }, {
        id: 8,
        total: null,
        waiterId: null,
        orderId: null,
        status: "clean"
      },
      {
        id: 9,
        total: null,
        waiterId: null,
        orderId: null,
        status: "clean"
      }, {
        id: 10,
        total: 60.12,
        waiterId: 6,
        orderId: 1,
        status: "serving"
      },
      {
        id: 11,
        total: null,
        waiterId: null,
        orderId: null,
        status: "clean"
      }, {
        id: 12,
        total: null,
        waiterId: 4,
        orderId: null,
        status: "dirty"
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
