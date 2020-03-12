const Table = require("../models").Table;

module.exports = {
    create(req, res) {
        return Table
            .create({
                Total: req.body.Total,
                waiterId: req.params.waiterId
            })
            .then(newTable =>  res.status(200).json(newTable))
            .catch(e => res.status(400).json(e));
    },
    list(req, res) {
        return Table
            .findAll()
            .then(tables => res.status(200).json(tables))
            .catch(e => res.status(400).json(e));
    },
    update(req, res){
      return Table
          .findOne({
              Where: {
                  id: req.params.id
              }
          })
          .then(table => {
              if(!table) {
                  return res.status(404).json({ msg: 'no table found' })
              }

              const { Total } = req.body;

              return Table
                  .update({
                      Total: Total || table.Total
                  })
                  .then(updatedTable => {
                      return res.status(200).json(updatedTable);
                  })
                  .catch(e => res.status(400).json(e))
          })
          .catch(e => res.status(400).json(e))
    },
    destroy(req, res) {
        return Table
            .findOne({
                where: {
                    id: req.body.id
                }
            }).then(table => {
                if (!table) {
                    return res.status(404).json({
                        message: 'no tables found'
                    });
                }
                return table
                    .destroy()
                    .then(() => res.status(200).json({message: 'Deleted successfully'}))
                    .catch(e => res.status(400).json(e))
            })
            .catch(e => res.status(400).json(e))
    },
};
