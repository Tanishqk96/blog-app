const express = require('express');
const { registercontroller, login} = require('../controllers/auth-controller');
const router = express.Router();

// POST REQUEST SO AS TO ALLOW THE USER TO REGISTER HIMSELF.
router.post('/register',registercontroller);
router.post('/login',login);
// exporting the routes 
module.exports = router;