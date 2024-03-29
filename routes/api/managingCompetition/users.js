const express = require("express");
const router = express.Router();
const {model} = require('../../../models/User');
const User = model;
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
        const newParticipant = new User(req.body);
        competition.participants.push(newParticipant);
        sponsor.save();
        res.send('new participant added');
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
