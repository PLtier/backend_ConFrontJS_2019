const express = require("express");
const router = express.Router();
const users = require('./users');


const Sponsor = require("../../../models/Sponsor");


router
    .post('/', (req, res) => {
    let {sponsor} = res.locals,
        {competitionName} = req.body,
        newCompetition = {
            competitionName,
            participants: []
        };
        sponsor.competitions.push(newCompetition);
        sponsor.save();
        res.send("competition has been created")
});



router
    .route('/:id')
    .delete((req, res) => {
        let {sponsor} = res.locals,
            {id} = req.params;
        sponsor.competitions[id].remove();
        sponsor.save();
        res.send("competition has been deleted");
    })
    .patch((req, res) => {
        let {sponsor} = res.locals,
            {id} = req.params,
            {newCompetitionName} = req.body;
        sponsor.competitions[id].competitionName = newCompetitionName;
        sponsor.save();
        res.send("competition name has been changed");
    });



router.use('/:id/users', (req,res,next)=>{
    let sponsor = req.sponsor,
        {id} = req.params;
    Sponsor.findOne(sponsor).then(sponsor=>{
        res.locals.competition = sponsor.competitions[id];
        res.locals.sponsor = sponsor;
        next();
    });
}, users);

module.exports = router;