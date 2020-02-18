'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.addColumn(
                    'orders',
                    'tableId',
                    {
                        type: Sequelize.INTEGER,
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
             queryInterface.removeColumn('orders', 'tableId')
         ])
       })
    }
};
