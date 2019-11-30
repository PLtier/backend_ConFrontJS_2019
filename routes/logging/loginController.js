const generateToken = require('./generator');
const accountExists = require('./accountExists');
const login = async (req, res) => {

    try {
        const result = await accountExists(req.body.sponsorName, req.body.password);
        const {sponsorName, password} = result;
        generateToken(res, sponsorName, password);
        res.send('authentication accepted') //cookies added
    } catch (err) {
        return res.status(500).send('authentication rejected');
    }
};
// loginController.js file
module.exports = login;