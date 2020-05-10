'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('menus', [
      {
        id: 1,
        item: "Burger",
        description: "Burger",
        price: 8.99,
      },
      {
        id: 2,
        item: "Spaghetti",
        description: "Spaghetti",
        price: 10.69,
      },
      {
        id: 3,
        item: "Steak",
        description: "Steak",
        price: 12.99,
      },
      {
        id: 4,
        item: "Salmon",
        description: "Salmon",
        price: 14.50,
      },
      {
        id: 5,
        item: "Chicken",
        description: "Chicken",
        price: 8.99,
      },
      {
        id: 6,
        item: "French Fries",
        description: "French Fries",
        price: 5.69,
      },
      {
        id: 7,
        item: "Nachos",
        description: "Nachos",
        price: 6.50,
      },
      {
        id: 8,
        item: "Buffalo Wings",
        description: "Buffalo Wings",
        price: 7.23,
      },
      {
        id: 9,
        item: "Mozzarella Sticks",
        description: "Mozzarella Sticks",
        price: 6.69,
      },
      {
        id: 10,
        item: "Veggie Platter",
        description: "Veggie Platter",
        price: 6.99,
      },
      {
        id: 11,
        item: "Chicken Noodle",
        description: "Chicken Noodle",
        price: 4.99,
      },
      {
        id: 12,
        item: "French Onion",
        description: "French Onion",
        price: 4.99,
      },
      {
        id: 13,
        item: "Vegetable",
        description: "Vegetable",
        price: 4.50,
      },
      {
        id: 14,
        item: "House Salad",
        description: "House Salad",
        price: 6.50,
      },
      {
        id: 15,
        item: "Caesar Salad",
        description: "Caesar Salad",
        price: 6.99,
      },
      {
        id: 16,
        item: "Chocolate Cake",
        description: "Chocolate Cake",
        price: 4.99,
      },
      {
        id: 17,
        item: "Red Velvet Cake",
        description: "Red Velvet Cake",
        price: 4.99,
      },
      {
        id: 18,
        item: "Carrot Cake",
        description: "Carrot Cake",
        price: 4.50,
      },
      {
        id: 19,
        item: "Apple Pie",
        description: "Apple Pie",
        price: 5.50,
      },
      {
        id: 20,
        item: "Ice Cream",
        description: "Ice Cream",
        price: 4.69,
      },
      {
        id: 21,
        item: "Water",
        description: "Water",
        price: 0.99,
      },
      {
        id: 22,
        item: "Soda",
        description: "Soda",
        price: 1.99,
      },
      {
        id: 23,
        item: "Iced Tea",
        description: "Iced Tea",
        price: 2.99,
      },
      {
        id: 24,
        item: "Tea",
        description: "Tea",
        price: 1.99,
      }
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
