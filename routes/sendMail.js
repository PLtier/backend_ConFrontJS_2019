const express = require('express');
const dotenv = require('dotenv');
const sgMail = require('@sendgrid/mail');
const router = express.Router();

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/', (req, res) => {
        const msg = {
            to: 'maciej.jalocha.pl@gmail.com',
            from: 'test@example.com',
            subject: 'Sending with Twilio SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        };
        sgMail.send(msg).then(()=>res.send('wysłane'));
    }

);

module.exports = router;