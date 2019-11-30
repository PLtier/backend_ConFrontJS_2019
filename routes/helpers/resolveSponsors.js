const Sponsor = require('../../models/Sponsor');


const getSponsor = (req, res, next) => {
    let sponsor = req.sponsor;
    Sponsor.findOne(sponsor).select("-_id -date").then(sponsor => {
        res.locals.sponsor = sponsor;
        next();
    });
};

module.exports = getSponsor;