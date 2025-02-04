const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const usermodel = require("../modals/usermodel");
const { json } = require('express/lib/response');
const registercontroller = async (req,res) =>{
    try {
        // DESTRUCTURE THE DATA YOU ARE RECIEVING FROM THE FRONTEND.
        const {username, email, password, address, phone} = req.body;
        // CHECK IF ANY DATA IS NOT FILLED .
        if(!username || !email || !password || !address || !phone){
            return res.send("Please enter all the required details !")
        }
        // CHECK IF THERE IS EXISTING USER OR NOT.
        const existing = await usermodel.findOne({email})
        if(existing){
            return res.send("user already exists!");
        }
        var salt =await  bcrypt.genSalt(10);
       const hashedpassword = await bcrypt.hash(password,salt);
        const user = await usermodel.create({username, email, password:hashedpassword, address, phone});
        res.send({
            message:"user registered !",
            user
        }
        )
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"error in registering!"
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                status: false,
                message: "Please provide email and password"
            });
        }

        // Find user in the database
        const user = await usermodel.findOne({ email });

        if (!user) {
            return res.status(400).json({
                status: false,
                message: "Invalid email or password"
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            res.send({
                message:"invalid credentials !"
            })
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'7d'})
        res.status(200).json({
            status: true,
            message: "Login successful!",
            token,
            user
        });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({
            status: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = {registercontroller, login};