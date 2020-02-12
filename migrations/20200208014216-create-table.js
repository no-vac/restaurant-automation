'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Tables', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            waiterId: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'Waiters',
                        schema: 'public'
                    },
                    key: 'id'
                },
                allowNull: false
            },
            TableNumber: {
                type: Sequelize.INTEGER
            },
            Orders: {
                type: Sequelize.ENUM,
                values: ['test'],
            },
            Total: {
                type: Sequelize.INTEGER
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
        return queryInterface.dropTable('Tables');
    }
};