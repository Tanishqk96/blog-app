const express = require('express');
const {testcontroller} = require('../controllers/test-controller');
const router = express.Router();

router.get('/test-user', testcontroller);

// exporting the routes 
module.exports = router;