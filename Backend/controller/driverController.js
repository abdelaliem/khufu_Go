const driver = require ("../models/driver")
const Users = async (req,res)=>{
    try {
    const busId = parseInt(req.params.busId)
    const booked = await driver.bookUsers(busId)
    res.send(booked)
    } catch (error) {
        console.log("error in driverController")
    }
    
}
const bookUsers = async(req,res)=>{
    try {
        const busId = parseInt(req.body.bus_id)
        const userId = parseInt(req.body.user_id)
        const updateUsers = await driver.applyBooks(userId,busId)
        res.send(updateUsers)
    } catch (error) {
        console.log("can't update users")
    }
}
module.exports = {Users,bookUsers}