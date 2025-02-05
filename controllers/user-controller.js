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
const resetpassword = async (req,res) =>{
    try {
        const {email,answer, newpassword} = req.body;
        if(!email || !answer || !newpassword){
            res.status(500).send({
                success:false,
                message:"Enter data!" 
            })
        }
        const user = await usermodel.findOne({email,answer});
        if(!user){
            res.status(500).send({
                success:false,
                message:"No user found !" 
            })
        }
        var salt =await  bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(newpassword,salt);
        user.password= hashedpassword;
        await user.save();
        res.status(200).send({
            success:true,
            message:" Password Updated",
            user
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"There was some error!"
        })
    }
}
module.exports = {getusercontroller, updateuser, resetpassword};