const busModule = require('../models/bus.js')
const getbusNum =  async (req,res)=>{
    try {
    const lat =  parseFloat(req.params.lat)
    const lang =  parseFloat(req.params.lang)
    
    const data = await busModule.getBuses(lat,lang,id)
    res.send(data)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getbusNum}