const Sponsor = require('../../models/Sponsor');


const accountExists = (sponsorName, password) =>{
    return Sponsor.findOne({
        sponsorName: sponsorName,
        password: password
    });
};

module.exports = accountExists;