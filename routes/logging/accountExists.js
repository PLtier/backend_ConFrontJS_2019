const Sponsor = require('../../models/Sponsor');


const accountExists = (sponsorName, password) =>{
    console.log(sponsorName, password , 'internal before');
    let a = null;
    return Sponsor.findOne({
        sponsorName: sponsorName,
        password: password
    });
};

module.exports = accountExists;