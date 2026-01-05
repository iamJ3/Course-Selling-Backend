const { JWT_USER_PASSWORD } = require("../config/config");
const jwt = require("jsonwebtoken")


function usermiddleware(req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_USER_PASSWORD);

    if (decoded) {
        req.userId = decoded.id;
        next()
    }else {
        res.status(403).json({
            message: "You are no signed up"
        });
    };
};

module.exports = {
    usermiddleware: usermiddleware
}