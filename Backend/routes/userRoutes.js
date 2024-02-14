const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
router.post('/signup',async (req,res)=>{
    // validation
    const {password , email , firstName , secondName , phone , isRider} = req.body
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/g
    const phonePattern = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if (phonePattern.test(phone) ) {
    }else{
        res.send("invalid phone number!")
    }
    if (emailPattern.test(email)) {
    }else{
        res.send("invalid email !")
    }
    if (passwordPattern.test(password)) {
    }else{
        res.send("The password is 8 to 16 characters long and must contain a numbers and at least one letter")
    }
    if (firstName && secondName) {    
    }else{
        res.send("please enter your first and second name")
    }
    if (isRider) {
        // enter type user in db is rider
    }else{
        // enter type user in db is user
    }
    //hashthePassword
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password,salt)
    res.send(hashedPassword)
})

router.post('/login',(req,res)=>{

})

module.exports= router;