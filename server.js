const colors = require('colors');
const express = require('express');
require('dotenv').config(); 
const PORT = process.env.PORT;
const app = express();
const morgan = require('morgan');

// middlewares 
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))

app.use('/api/v1', require('./routes/test-route'))

app.get('/', (req,res)=>{
    res.send("working fine");
})

app.listen(PORT,()=>{
    console.log(`running on port ${process.env.PORT}`.bgMagenta);
} )