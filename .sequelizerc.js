const path = require('path');

module.exports = {
    "Config" : path.resolve('./config', 'config.json'),
    "modules-path": path.resolve('./models'),
    "seeders-path": path.resolve('./seeders'),
    "migrations-path": path.resolve('./migrations')
};