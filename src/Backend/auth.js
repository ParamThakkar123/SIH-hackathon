const express = require('express');
const router = express.Router();

router.get('/home', (req, res)=>{
    console.log(`Hello from home page`)
})

router.post('/ssign', (req, res)=> {
    console.log(req.body)
    res.json({message: req.body})
})
module.exports = router;