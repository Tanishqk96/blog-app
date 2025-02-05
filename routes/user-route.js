const express = require('express');
const authmiddleware = require('../middleware/authmiddleware')
const router = express.Router();
const {getusercontroller, updateuser} = require('../controllers/user-controller')
router.get('/getuser',authmiddleware,getusercontroller);
router.put('/updateuser',authmiddleware, updateuser)
// exporting the routes 
module.exports = router;