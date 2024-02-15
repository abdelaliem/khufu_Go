const SQLModel = require('./Model');

// Create a new class for a specific table
class UserModel extends SQLModel {
    constructor() {
        // table name
        super('users');
    }
}
// example in controller 
/*
    router.get('/find/:id',async(req,res)=>{
        const data = await UserModel.findById(2)
        res.send(data)
    })
    router.post('/add/:id',async(req,res)=>{
    const data = await UserModel.create({
        name:"sayed",
        "age":5,
        email:"sayed@55"
    })
    res.send("done")
})
*/
module.exports = new UserModel
