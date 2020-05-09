'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('payrolls', [
      {
        id: 1,
        userId: 1,
        clockInTime: new Date("2020-05-10T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-10T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 200
      },
      {
        id: 2,
        userId: 1,
        clockInTime: new Date("2020-05-11T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-11T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 200
      },
      {
        id: 3,
        userId: 2,
        clockInTime: new Date("2020-05-10T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-10T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 184
      },
      {
        id: 4,
        userId: 2,
        clockInTime: new Date("2020-05-11T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-11T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 184
      },
      {
        id: 5,
        userId: 3,
        clockInTime: new Date("2020-05-10T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-10T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 192
      },
      {
        id: 6,
        userId: 3,
        clockInTime: new Date("2020-05-11T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-11T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 192
      },
      {
        id: 7,
        userId: 4,
        clockInTime: new Date("2020-05-10T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-10T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 96
      },
      {
        id: 8,
        userId: 4,
        clockInTime: new Date("2020-05-11T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-11T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 96
      },
      {
        id: 9,
        userId: 5,
        clockInTime: new Date("2020-05-10T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-10T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 80
      },
      {
        id: 10,
        userId: 5,
        clockInTime: new Date("2020-05-11T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-11T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 80
      },
      {
        id: 11,
        userId: 6,
        clockInTime: new Date("2020-05-10T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-10T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 80
      },
      {
        id: 12,
        userId: 6,
        clockInTime: new Date("2020-05-11T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-11T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 80
      },
      {
        id: 13,
        userId: 7,
        clockInTime: new Date("2020-05-10T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-10T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 96
      },
      {
        id: 14,
        userId: 7,
        clockInTime: new Date("2020-05-11T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-11T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 96
      },
      {
        id: 15,
        userId: 8,
        clockInTime: new Date("2020-05-10T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-10T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 80
      },
      {
        id: 16,
        userId: 8,
        clockInTime: new Date("2020-05-11T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-11T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 80
      },
      {
        id: 17,
        userId: 9,
        clockInTime: new Date("2020-05-10T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-10T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 80
      },
      {
        id: 18,
        userId: 9,
        clockInTime: new Date("2020-05-11T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-11T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 80
      },
      {
        id: 19,
        userId: 9,
        clockInTime: new Date("2020-05-10T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-10T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 96
      },
      {
        id: 20,
        userId: 10,
        clockInTime: new Date("2020-05-11T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-11T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 96
      },
      {
        id: 21,
        userId: 11,
        clockInTime: new Date("2020-05-10T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-10T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 80
      },
      {
        id: 22,
        userId: 11,
        clockInTime: new Date("2020-05-11T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-11T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 80
      },
      {
        id: 23,
        userId: 12,
        clockInTime: new Date("2020-05-10T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-10T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 80
      },
      {
        id: 24,
        userId: 12,
        clockInTime: new Date("2020-05-11T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-11T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 80
      },
      {
        id: 25,
        userId: 13,
        clockInTime: new Date("2020-05-10T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-10T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 200
      },
      {
        id: 26,
        userId: 13,
        clockInTime: new Date("2020-05-11T13:00:00.000Z"),
        clockOutTime: new Date("2020-05-11T21:00:00.000Z"),
        hoursWorked: 8,
        totalWage: 200
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
