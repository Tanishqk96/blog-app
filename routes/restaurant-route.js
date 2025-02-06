const express = require('express');
const {createrestaurant, getallrestaurant, getrestaurantbyid, deleterestaurant,deleterestaurantbyid} = require('../controllers/restaurant-controller');
const router = express.Router();

router.post('/createrestaurant',createrestaurant);
router.get('/allrestaurants', getallrestaurant);
router.get('/allrestaurants/:id', getrestaurantbyid)
router.delete('/deleterestaurant',deleterestaurant);
router.delete('/deleterestaurant/:id',deleterestaurantbyid);
// exporting the routes 
module.exports = router;