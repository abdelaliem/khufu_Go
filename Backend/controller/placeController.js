const place = require('../models/place')
const getPlaces = async (req,res)=>{
     try {
         const data = await place.getAllPlaces();
    res.json(data); 
     } catch (error) {
        console.log('not working')
     }
    }
const getPlaceId = async (req,res)=>{
    try {
        const lat = parseFloat(req.params.lat)
        const lang = parseFloat(req.params.lang)
        const data = await place.getPlaceId(lat,lang);
        res.send(data)
    } catch (error) {
        console.log('not working')
    }
}   
module.exports= {getPlaces,getPlaceId}