const jwt =require('jsonwebtoken')

const requireAuth = function (req, res, next) {
    const token = req.body.token
    if (token) {
        jwt.verify(token , 'sultan is develober',(err , decodedToken)=>{
            if (err) {
                res.send("user not login yet")
            }else{
                next()
            }
        })
    }else{
        res.send("user not login yet")
    }

}

module.exports= requireAuth;
