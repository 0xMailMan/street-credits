const express = require('express');
const { handleEventCheckin } = require('../controllers/eventController');

const router = express.Router();

// Route to handle user check-in and minting NFT
router.post('/checkin', handleEventCheckin);

module.exports = router;
