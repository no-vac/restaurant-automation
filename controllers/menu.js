const menuServices = require('../services/menu/menuServices');

module.exports = {
    create(req, res) {
        const items = {item, description, price} = req.body;
        console.log(items);
        menuServices
            .createMenuItem(items)
            .then(data => {
                if (data) {
                    return res.status(200).json({itemAdded: data})
                }
            })
            .catch(e => {
                return res.status(400).json({
                    msg: 'hmm i think you fucked up',
                    error: e
                })
            })
    },
    list(req, res) {
        menuServices
            .getItems()
            .then(data => {
                return res.status(200).json({
                    items: data
                })
            })
            .catch(e => {
                return res.status(400).json({
                    msg: 'hmm i dont think this shit is right',
                    error: e
                })
            })
    }
};
