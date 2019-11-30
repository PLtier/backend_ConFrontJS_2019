const jwt = require('jsonwebtoken');

const generateToken = (res, sponsorName, password) => {
    const expiration = process.env.DB_ENV === 'testing' ? 86400000 : 604800000;
    const token = jwt.sign({ sponsorName, password }, process.env.JWT_SECRET, {
        expiresIn: process.env.DB_ENV === 'testing' ? '1d' : '7d',
    });
    res.cookie('token', token, {
        expires: new Date(Date.now() + expiration),
        secure: false, // set to true if your using https
        httpOnly: true,
    });
};
module.exports = generateToken;