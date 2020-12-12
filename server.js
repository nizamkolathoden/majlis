const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config/key.env' })
const app = express();
//use json
app.use(express.json())
app.use(require('./routes/question'));


const DB = require('./config/DB')
PORT = process.env.PORT;

//connect to DB
DB()

app.listen(PORT, () => console.log(`server running on ${process.env.NODE_ENV} in ${PORT}`))