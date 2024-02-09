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
        console.log(place_id);
        const places = await bus.getBusNum(place_id)
        console.log(places)
        res.send(data)
    } catch (error) {
        console.log('not working')
    }
}   
module.exports= {getPlaces,getPlaceId}

