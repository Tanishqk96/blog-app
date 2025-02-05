const colors = require('colors');
const express = require('express');
require('dotenv').config(); 
const PORT = process.env.PORT;
const app = express();
const morgan = require('morgan');
const connectdb = require('./config /db')
app.use(express.static('public'));

// Templating Engine

app.set('view engine', 'ejs');

// middlewares 
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/test', require('./routes/test-route'));
app.use('/api/v1/auth', require('./routes/auth-route'));
app.use('/api/v1/user', require('./routes/user-route'));
app.use('/api/v1/restaurant', require('./routes/restaurant-route'));

app.get('/', (req,res)=>{
    res.send("working fine");
})
// const startServer = async () => {
//     try {
    connectdb();
    app.listen(PORT, () => {
        console.log(`running on port ${process.env.PORT}`.bgMagenta);
      });
//     } catch (error) {
//       console.error("Error connecting to the database:", error);
//       process.exit(1); 
//     }
//   };
  //startServer();