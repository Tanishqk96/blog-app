const mongoose = require('mongoose');

const mongodb = async () =>{
    try {
         await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected successfuly- ${mongoose.connection.host}`.bgBlue)
    } catch (error) {
        console.log(`error- ${error.message}`);
    }
}
module.exports = mongodb;