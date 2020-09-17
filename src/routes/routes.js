const express = require('express');
const router = express.Router();
const emailService = require('../email/emailService');

router.get('/', emailService.testServer);

router.post('/', emailService.submit);

module.exports = router
