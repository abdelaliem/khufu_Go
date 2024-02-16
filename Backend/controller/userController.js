const bcrypt = require('bcrypt')
const UserModel=  require('../models/UserModel')
const jwt =require('jsonwebtoken')
const createToken = (id)=>{
    return jwt.sign({id}, 'sultan is develober',{expiresIn : 3*24*60*60})
}
module.exports = {
    sginUp:async (req,res)=>{
        // validation
        const {password , email , firstName , secondName , phone } = req.body
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
        //hashthePassword
        // gen salt generate version of hashing
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password,salt)
        try {
            await UserModel.create({
                password:hashedPassword,
                firstName,
                secondName,
                phone,
                email
            })
            res.send("signUp done")
        }catch (error) {
            res.send(error.sqlMessage)
        }
    },
    login:async(req,res)=>{
        const {email , password} = req.body;
        const user = await UserModel.where("email",email).first();
        if (user == null) {
            res.send("email is wrong")
        }else{
            const auth = await bcrypt.compare( password, user.password )
            if (!auth) {
                res.send("password is wrong")
            }else{
                const token = createToken(user.id)
                res.send({token})
            }
        }
    
    },
    userInfo:(req,res)=>{
        jwt.verify(req.params.token,"sultan is develober",async(err , decodedToken)=>{
            if (err) {
                res.send(err.message)
            }else{
                const data = await UserModel.findById(decodedToken["id"]);
                res.send(data)
            }
        });
    }
}
