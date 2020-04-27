const jwt = require('jsonwebtoken');

const { SECURE_KEY_JWT } = process.env;

module.exports = {
    createJWT: (id, username, email, role) => {
        const userToken = jwt.sign({ id, username, email, role}, SECURE_KEY_JWT, { expiresIn: '1hr' });
        return userToken;
    },

    verifyJWT: (token) => {
        const decoded = jwt.verify(token, SECURE_KEY_JWT);
        return decoded;
    }
};
