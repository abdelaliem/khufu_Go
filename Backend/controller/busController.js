const busModule = require('../models/bus.js')
const placeModule = require("../models/place.js")
const getBusData =  async (req,res)=>{
    try {
   id = parseInt(req.params.id)
    locationId = parseInt(req.params.locationId)
    const data = await busModule.getBusNum(id)
    if(data.length==0){
        res.send('no buses found')
    }
    // get all buses id of bus_number
    const busIds =  await new Promise((resolve,reject)=>{
        const busesId = []
        var test = data.length
        data.forEach(async busNum => {
        const busId = await busModule.getBusId(busNum['bus_number'])
        if(busId){
         for (let i = 0; i < busId.length; i++) {
            busesId.push(busId[i]['bus_id']);  
        }
        }
        test = test-1
        if(test==0){
            resolve(busesId)
        }
    })
    })

    // get the driver of every bus_id
    const driverInfo = await new Promise(
        (resolve,reject)=>{
        const driverData = []
        var test = busIds.length
        busIds.forEach(async id => {
            var driver = await busModule.driverData(id)
            if(driver.length>0){
                 driverData.push(driver[0])
            }   
        
        test = test-1
        if(test==0){
        resolve(driverData)
        }
        });
       
    })

    const finalData = await new Promise((resolve,reject)=>{
        const driverData = driverInfo
        var test = driverData.length
        driverData.forEach( async driver => {
            const [busNum] = await busModule.getBusNumByBusID(driver['bus_id'])
            driver['bus_num']=busNum['bus_number']
            var [placesId] = await busModule.getBusPlaces(busNum['bus_number']);
            placesId  = placesId['placesId'].split(',')
            var checkIfLocationExist = placesId.includes(String(locationId))
            const place = await new Promise((resolve,reject)=>{
            var placesName = []
            var sectest = placesId.length
                    placesId.forEach(async item => {
                    const placeId = parseInt(item)
                    const [placeName] = await placeModule.getPlaceName(placeId)
                    placesName.push(placeName['place_name'])
                    sectest-=1
                    if(sectest==0){
                        resolve(placesName)
                    }
                });
                })
            if(checkIfLocationExist){
            driver['bus_places']= place
             }
             else{
                driverData.pop(driver)
            }
            test -= 1
            if(test==0){
            resolve(driverData)
            }
        });
        
    })
    res.send(finalData)
    } catch (error) {
        console.log(error)
    }
}

const suggestBuses = async (req,res)=>{
    id = parseInt(req.params.id)
    locationId = parseInt(req.params.locationId)
    
}

module.exports = {getBusData}