const express = require('express');
const loginController = require('./loginController');
const logoutController = require('./logoutController');
const router = express.Router();


router.post('/in', loginController);
router.post('/out', logoutController);

module.exports = router;
