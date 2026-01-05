const {JWT_ADMIN_PASSWORD } = require("../config/config");
const jwt = require("jsonwebtoken")

function adminmidlleware(req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);

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
    adminmidlleware: adminmidlleware
}