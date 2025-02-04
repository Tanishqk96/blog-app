const usermodel = require("../modals/usermodel");
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
        const user = await usermodel.create(req.body);
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

        res.status(200).json({
            status: true,
            message: "Login successful!"
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