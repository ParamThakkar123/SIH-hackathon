const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    Pphone:{
        type: Number,
        required: true
    },
    Gphone:{
        type: Number,
        required: true
    },
    Sphone:{
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    institute:{
        type: String,
        required: true
    },
    cpassword:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    }
});

const User = mongoose.model('HACKATHON-PROJECT', userSchema);
module.exports = User;