const place = require('../models/place')
const bus = require('../models/bus');
const getPlaces = async (req,res)=>{
     try {
         const data = await place.getAllPlaces();
         console.log("##############");
         console.log(data);
        res.json(data); 
     } catch (error) {
        console.log('not working')
     }
    }
const getPlaceId = async (req,res)=>{
    try {
        const lat = parseFloat(req.params.lat)
        const lang = parseFloat(req.params.lang)
        const [data] = await place.getPlaceId(lat,lang);
        let {place_id} = data
        const [number] = await bus.getBusNum(place_id)
        let {bus_number} = number
        const placesOfBus = await bus.getBusPlaces(bus_number)
        const [busesId] = await bus.getBusId(bus_number)
        const {bus_id} = busesId
        res.send(bus_number)
    } catch (error) {
        console.log(error)
    }
}   
module.exports= {getPlaces,getPlaceId}

