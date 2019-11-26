const express = require("express");
const dotenv = require("dotenv");
const sgMail = require("@sendgrid/mail");
const verifyResolveToken = require("./logging/verifyToken");
const router = express.Router();

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post("/", verifyResolveToken, (req, res) => {
  let sponsor = req.sponsor,
    mail = req.body.mail;
  Sponsor.findOne(sponsor).then(sponsor => {
    const msg = {
      to: mail,
      from: "test@example.com",
      templateId: "d-12e940c96f1b439394d6895f97129dde",
      dynamic_template_data: {
        subject: "test",
        name: "Some One",
        signedUsers: sponsor.participants
      }
    };
    sgMail.send(msg);
    res.send('wysłano testowe maila')
  })
});

module.exports = router;
