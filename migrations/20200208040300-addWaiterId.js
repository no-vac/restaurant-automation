'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.addColumn(
                    'Tables',
                    'waiterId',
                    {
                        type: Sequelize.INTEGER,
                        references: {
                            model: {
                                tableName: 'Waiters',
                                schema: 'public'
                            },
                            key: 'id',
                            as: 'waiterId'
                        },
                        allowNull: false
                    }, {transaction: t})
            ]);
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.removeColumn('Tables', 'waiterId', {transaction: t})
            ]);
        });
    }
};
