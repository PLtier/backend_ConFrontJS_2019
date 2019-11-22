const express = require('express');
const router = express.Router();

const Sponsor = require('../../models/Sponsor');


    /* GET users listing. */
router.get('/', (req, res) => {
  Sponsor.findOne({
    sponsorName: 'lexus',
    password: 'djdmw32mdks'
  }).then(sponsor=>res.json(sponsor.participants))

});


router.post('/', (req, res) => {

  // TODO: potem zostanie zmienione na req.body

  const {first_name, last_name, mail} = req.body,
      newParticipant = {
        first_name,
        last_name,
        mail
      };


  Sponsor.findOne({
    sponsorName: 'lexus',
    password: 'djdmw32mdks'
  }).then(sponsor=>{
    sponsor.participants.push(newParticipant);
    sponsor.save().then((updatedSponsor)=>res.json(updatedSponsor.participants)
    )
  })
});

router.delete('/', (req, res)=> {
    Sponsor.findOne({
        sponsorName: 'lexus',
        password: 'djdmw32mdks'
    }).then(sponsor=>res.json(sponsor))
    });

module.exports = router;
