const express = require("express");
const router = express.Router();
const verifyResolveToken = require("../logging/verifyToken");
const Sponsor = require("../../models/Sponsor");

/* GET users listing. */
router.get("/", verifyResolveToken, (req, res) => {
  let sponsor = req.sponsor;
  Sponsor.findOne(sponsor).then(sponsor => res.json(sponsor.participants));
});

router.post("/", verifyResolveToken, (req, res) => {
  const sponsor = req.sponsor,
    { first_name, last_name, mail } = req.body,
    newParticipant = {
      first_name,
      last_name,
      mail
    };
  Sponsor.findOne(sponsor).then(sponsor => {
    sponsor.participants.push(newParticipant);
    sponsor
      .save()
      .then(updatedSponsor => res.json(updatedSponsor.participants));
  });
});

router.delete("/", verifyResolveToken, (req, res) => {
  let sponsor = req.sponsor;
  let parti;
  Sponsor.findOne(sponsor).then(sponsor => res.json(sponsor));
});

module.exports = router;
