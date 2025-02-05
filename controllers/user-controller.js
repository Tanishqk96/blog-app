const usermodel = require("../modals/usermodel");
const getusercontroller = async (req,res) =>{
    try {
        const user = await usermodel.findById({_id: req.body.id})
        if(!user){
            res.status(500).send({
                success:false,
                message:"No user found !" 
            })
        }
        res.status(200).send({
            success:true,
            message:"Found!" ,
            user,
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"There was some error!"
        })
    }
}
const updateuser = async (req,res) =>{
    try {
        const user = await usermodel.findById({_id: req.body.id})
        if(!user){
            res.status(500).send({
                success:false,
                message:"No user found !" 
            })
        }
        const {username, email, address, phone} =  req.body;
        if (username) user.username = username;
        if (email) user.email = email;
        if (address) user.address = address;
        if (phone) user.phone = phone;
        await user.save();
        res.status(200).send({
            success:true,
            message:"Updated",
            user
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"There was some error!"
        })
    }
}
module.exports = {getusercontroller, updateuser};