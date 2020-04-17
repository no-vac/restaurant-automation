const Payroll = require('../models').payroll;

module.exports = {
    create(req, res){
        const { timeIn, timeOut, hourlyRate, payPeriodAmount } = req.body;
        return Payroll
            .create({
                timeIn: Date.now().toString(),
                timeOut: timeOut,
                //userId: userId,
                hourlyRate: hourlyRate,
                payPeriodAmount: payPeriodAmount
            })
            .then(payrollReport => res.status(200).json(payrollReport))
            .catch(e => res.status(400).json(e))
    }
};
