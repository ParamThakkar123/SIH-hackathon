const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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
    institute:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cpassword:{
        type: String,
        required: true
    }
});



userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
})

const User = mongoose.model('HACKATHON-PROJECT', userSchema);
module.exports = User;