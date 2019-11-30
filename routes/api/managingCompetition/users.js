const express = require("express");
const router = express.Router();
// const verifyResolveToken = require("../logging/verifyToken");
/* GET users listing. */


router
    .route('/')
    .get((req, res) => {
        let {competition} = res.locals;
        res.json(competition.participants);
    })
    .post((req, res) => {
        let {sponsor, competition} = res.locals;
        const {first_name, last_name, mail} = req.body,
            newParticipant = {
                first_name,
                last_name,
                mail
            };
        competition.participants.push(newParticipant);
        sponsor.save();
        res.send('added');
    });


router
    .route('/:id')
    .get((req, res) => {
        let {competition} = res.locals;
        let id = req.params.id;
        res.json(competition.participants[id]);
    })
    .delete((req, res) => {
        let {sponsor, competition} = res.locals;
        let id = req.params.id;
        let remove = competition.participants.splice(id, 1);
        sponsor.save();
        res.send('succesfully deleted');
    });

module.exports = router;
