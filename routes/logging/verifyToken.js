const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();
const verifyToken = async (req, res, next) => {
    const token = req.cookies.token || '';
    try {
        if (!token) {
            return res.status(401).json('You need to Login')
        }
        const decrypt = await jwt.verify(token, process.env.JWT_SECRET);
        req.sponsor = {
            sponsorName: decrypt.sponsorName
        };
        next();
    } catch (err) {
        return res.status(500).json('unauthenticated token rejection');
    }
};

module.exports = verifyToken;