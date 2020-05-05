const jwt = require('jsonwebtoken');
const userServices = require('./services/user/userServices');

const { SECURE_KEY_JWT } = process.env;

exports.createJWT = (id, username, email, role) => {
        const userToken = jwt.sign({ id, username, email, role}, SECURE_KEY_JWT, { expiresIn: '1hr' });
        return userToken;
};

exports.verifyJWT = (token) => {
    const decodedToken = jwt.verify(token, SECURE_KEY_JWT, (err, decoded) => {
        if(err || Date.now() >= decoded.exp * 1000){
            return "Token is not valid";
        } else {
            return decoded;
        }
    });
    return decodedToken;
};

exports.protected = (req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    console.log("token: " + token);

    if(!token) {
        return next(Error('Not authorized to access this route'))
    }

    try{
        const decoded = jwt.verify(token, SECURE_KEY_JWT);

        req.user = userServices.getUser(decoded.username);
        req.user.role = decoded.role;
        console.log("body: " + decoded.role);
        next();
    } catch (e) {
        return next(Error(e))
    }
};

exports.authorize = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)) {
            return next(
                new Error(``)
            )
        }
        next();
    }
}


