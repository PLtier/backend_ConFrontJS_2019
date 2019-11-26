const generateToken = require('./generator');
const accountExists = require('./accountExists');
const login = async (req, res, next) => {
    let fSponsorName = req.body.sponsorName, fPassword = req.body.password;
    try {

        const result = await accountExists(fSponsorName, fPassword);
        const {sponsorName, password} = result;
        generateToken(res, sponsorName, password);
        res.send('a')
// carry out other actions after generating token like sending a response);
    } catch (err) {
        return res.status(500).json(err.toString());
    }
};
// loginController.js file
module.exports = login;