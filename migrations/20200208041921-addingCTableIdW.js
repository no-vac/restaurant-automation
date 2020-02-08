'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.addColumn(
                    'Waiters',
                    'tableId',
                    {
                        type: Sequelize.ENUM(''),
                        defaultValue: '',
                        references: {
                            model: {
                                tableName: 'Tables',
                                schema: 'public'
                            },
                            key: 'id',
                            as: 'tableId'
                        },
                        allowNull: true
                    }, {transaction: t})
            ]);
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.removeColumn('Waiters', 'tableId', {transaction: t})
            ]);
        });
    }
};
