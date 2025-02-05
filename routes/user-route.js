const express = require('express');
const authmiddleware = require('../middleware/authmiddleware')
const router = express.Router();
const {getusercontroller, updateuser,resetpassword, deleteuser} = require('../controllers/user-controller')
router.get('/getuser',authmiddleware,getusercontroller);
router.put('/updateuser',authmiddleware, updateuser)
router.put('/resetpassword',authmiddleware, resetpassword)
router.delete('/deleteuser/:id', authmiddleware,deleteuser)

// exporting the routes 
module.exports = router;