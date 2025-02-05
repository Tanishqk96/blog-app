const express = require('express');
const {createrestaurant} = require('../controllers/restaurant-controller');
const router = express.Router();

router.post('/createrestaurant',createrestaurant);
// exporting the routes 
module.exports = router;