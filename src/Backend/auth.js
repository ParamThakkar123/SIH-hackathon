const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../Backend/model/userSchema');

router.get('/home', (req, res)=>{
    console.log(`Hello from home page`)
})

router.post('/ssign', (req, res)=> {
    const {fname, lname, email, Pphone, Gphone, Sphone, institute, age, password, cpassword} = req.body;

    if(!fname || !lname || !email || !Pphone || !Gphone || !Sphone || !institute || !age || !password || !cpassword){
        return res.status(422).json("Credentials not complete");
    }

    User.findOne({email: email})
    .then((userExist) => {
        if(userExist){
            return res.status(422).json("User already exists with this email")
        }else if(password != cpassword){
            return res.status(422).json({error: "password not matching"})
        }else{
            const user = new User({fname, lname, email, Pphone, Gphone, Sphone, institute, age, password, cpassword});
        }
        user.save().then(() => {
            res.status(201).json({message:"User registration successful"})
        }).catch((err) => {
            res.status(500).json({error: "Registration failed"})
        })
    }).catch(err => {console.log(err);})
});

router.post('/login', async (req, res) => {
    try{
        let token;
        const {email, password} = req.body;
        if(!email || !password){
            res.status(400).json({error: "Invalid Details"})
        }
        const userLogin = await User.findOne({email: email});

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);
            token = await userLogin.generateAuthToken();
            if(!isMatch){
                res.status(400).json({message: "Invalid Credentials"});
            }else{
                res.json({message:"Sign In successful"});
            }
        }else{
            res.status(400).json({message: "Invalid Credentials"});
        }
    }catch(err){
        console.log(err);
    }
})
module.exports = router;