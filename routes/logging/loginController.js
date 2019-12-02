const generateToken = require('./generator');
const accountExists = require('./accountExists');
const login = async (req, res) => {

    try {
        const result = await accountExists(req.body.sponsorName, req.body.password);
        const {sponsorName} = result;
        generateToken(res, sponsorName);
        res.send('authenticaction ready') //cookies added
    } catch (err) {
        return res.status(500).send(err.toString());
    }
};
// loginController.js file
module.exports = login;