const mongoose = require('mongoose');
const express = require('express');
const  dotenv = require('dotenv');
app = express();

dotenv.config({path: './config.env'})
const DB = process.env.DATABASE;
const PORT = process.env.PORT;

const User = require('./model/userSchema');

mongoose.connect(DB).then(() => {
    console.log(`Connection Successful`)
}).catch(() => {
    console.log(`Connection Unsuccessful`);
})

app.use(express.json())
app.use(require('./auth'))

app.get('/about', (req, res) => {
    res.send(`Hello from About Page`);
})

app.get('/profile', (req, res) => {
    res.send(`Hello from profile page`);
})

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
})