/*
'use strict';
module.exports = (sequelize, DataTypes) => {
  const payroll = sequelize.define('payroll', {
    userId: DataTypes.INTEGER,
    clockInTime: DataTypes.DATE,
    clockOutTime: DataTypes.DATE,
    wage: DataTypes.DECIMAL,
    hoursWorked: DataTypes.DECIMAL,
    totalWage: DataTypes.DECIMAL,
  }, {});
  payroll.associate = function(models) {
    // associate can  be defined here
  };
  return payroll;
};
*/

const payrollServices = require('../services/payroll/payrollServices');
module.exports = {
    create(req, res) { //creating constants 
        const payrollInfo = { userId, wage, totalWage, clockInTime, clockOutTime, hoursWorked } = req.body;
        return payrollServices //creating tables for our contants with parameters for script
            .createPayroll(payrollInfo)
            .then(payroll => {
                return res.status(200).json(payroll)
            })
            .catch(e => res.status(400).json(e))
    },

    list(req, res) {
        return payrollServices
            .getPayroll()
            .then(payroll => {
                return res.status(200).json(payroll)
            })
            .catch(error => {
                return res.status(400).json({ error: error.message });
            })
    },

    payroll(req, res) {
        const { id } = req.params;

        return payrollServices
            .getPayrollById(id)
            .then(payroll => {
                return res.status(200).json(payroll)
            })
            .catch(error => {
                return res.status(400).json({ error: error.message });
            })
    },

    update(req, res) {
        const payrollInfo = { userId, wage, totalWage, clockInTime, clockOutTime, hoursWorked, id } = req.body;

        return payrollServices
            .updatePayroll(payrollInfo)
            .then(() => {
                return res.status(200).json({ table, msg: 'payroll has been updated' });
            })
            .catch(error => {
                return res.status(400).json({ error: error.message });
            })
    },

    destroy(req, res) {
        const { id } = req.body;

        return payrollServices
            .deletePayroll(id)
            .then(() => {
                return res.status(200).json({ msg: 'payroll has been deleted' })
            })
            .catch(error => {
                return res.status(400).json({ error: error.message });
            })
    },
};
