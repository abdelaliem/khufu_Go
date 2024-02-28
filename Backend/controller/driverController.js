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
        // console.log(busId,userId)
        const updateUsers = await driver.applyBooks(userId,busId)
        res.send(updateUsers)
    } catch (error) {
        console.log("can't update users")
    }
}

const cancelBook = async (req,res)=>{
    try {
        const userId = parseInt(req.body.user_id)
        const cancel = await driver.cancelAplly(userId)
        res.send(cancel)
    } catch (error) {
        console.log("not canceled")
    }
}

const bookDone = async (req,res)=>{
    try {
        const userId = parseInt(req.body.user_id)
        const done = await driver.bookDone(userId)
        res.send(done)
    } catch (error) {
        console.log(error)
    }
}
const UpdateBusLocation = async (req,res)=>{
    try {
        const busId = req.body.bus_id
        const lat = req.body.lat
        const lang = req.body.lang
        const done = await driver.UpdateBusLocation(lat,lang,busId)
        res.send(done)
    } catch (error) {
        console.log(error)
    }
}
module.exports = {Users,bookUsers,cancelBook,bookDone,UpdateBusLocation}