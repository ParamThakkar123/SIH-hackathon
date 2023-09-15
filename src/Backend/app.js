const mongoose = require('mongoose');
const express = require('express');
app = express();
const DB = 'mongodb+srv://paramthakkar864:gBkTXPh8kubgowNd@cluster0.xu1pjk0.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DB).then(() => {
    console.log(`Connection Successful`)
})

app.get('/about', (req, res) => {
    res.send(`Hello from About Page`);
})

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
})