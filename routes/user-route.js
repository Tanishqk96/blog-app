const express = require('express');
const authmiddleware = require('../middleware/authmiddleware')
const router = express.Router();
const {getusercontroller, updateuser,resetpassword} = require('../controllers/user-controller')
router.get('/getuser',authmiddleware,getusercontroller);
router.put('/updateuser',authmiddleware, updateuser)
router.put('/resetpassword',authmiddleware, resetpassword)


// exporting the routes 
module.exports = router;