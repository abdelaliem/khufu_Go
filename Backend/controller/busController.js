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
            placesId = placesId['placesId'].split(',')
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



const getAllBusesOfId = async(req,res)=>{
    try {
    id = parseInt(req.params.id)
    locationId = parseInt(req.params.locationId)
    const data = await busModule.getBusNum(id)
    if(data.length==0){
        res.send('no buses found')
    }
    const finalData = await new Promise((resolve,reject)=>{

        //using let because of abdelaliem have a problem with var
        let test = data.length
        let Arraydata=[]

        //loop on each bus Num to get it places
         data.forEach( async Num => {
            let [placesId] = await busModule.getBusPlaces(Num['bus_number']);
            let [path] = await busModule.getBusPath(Num['bus_number'])
            console.log(path)
            placesId  = placesId['placesId'].split(',')
            let checkIfLocationExist = placesId.includes(String(locationId))
            const place = await new Promise((resolve,reject)=>{
            let placesName = []
            let sectest = placesId.length
            // loop on the places id to get the name of each place
                    placesId.forEach(async item => {
                    const placeId = parseInt(item)
                    const [placeName] = await placeModule.getPlaceName(placeId)
                    placesName.push(" "+ placeName['place_name'] +" ")
                    sectest-=1
                    if(sectest==0){
                        resolve(placesName)
                    }
                });
            })
            //check if the buse go to the location of the user
            if(checkIfLocationExist){ 
                Num['places'] = place
                Num['path'] = path['bus_path']
                Arraydata.push(Num)
                
            } 
            test -= 1
            if(test==0){
            resolve(Arraydata)
            }
        });
    })  
    res.send(finalData) 
    } catch (error) {
       console.log('something wrong errrrrorrrr') 
    }   
}


const getAllBuses = async(req,res)=>{
const buses = await busModule.getBusNum()
if(buses.length==0){
    res.send("no buses found")
}
else{
    const places = new Promise((resolve,reject)=>{
        test = buses.length
        // loop to get places of each bus
        buses.forEach(async bus =>{
            let [placesId] = await busModule.getBusPlaces(bus['bus_number'])
            // put each path of bus number 
            placesId = placesId['placesId'].split(',')
            let sectest = placesId.length
            bus['places'] = []
            // loop to get the name of the place by it's id
            const placesNames = new Promise((resolve,reject)=>{
                placesId.forEach(async id => {
                const [name] = await placeModule.getPlaceName(parseInt(id)) 
                bus['places'].push(" "+ name['place_name'] +" ")
                sectest-=1
                if(sectest==0){
                    resolve()
                }
            });
            })
            await placesNames
            test-=1
            if(test==0){
            resolve(buses)
        }
            
        } )
    })
    const s = await places
    res.send(s)
}

}

const getAllBusesOfNum = async(req,res)=>{
    const num = parseInt(req.params.num)
    const busId = await busModule.getBusId(num)
    // console.log(busId)
    const driverInfo = await new Promise(
        (resolve,reject)=>{
        const driverData = []
        let test = busId.length
        busId.forEach(async id => {
            // console.log(id)
            var driver = await busModule.driverData(id['bus_id'])
            if(driver.length>0){
                 driverData.push(driver[0])
            }   
        test = test-1
        if(test==0){
        resolve(driverData)
        }
        })
    });
    res.send(driverInfo)
}
const suggestBuses = async (req,res)=>{
    id = parseInt(req.params.id)
    locationId = parseInt(req.params.locationId)
    
}

module.exports = {getBusData,getAllBusesOfId,getAllBuses,getAllBusesOfNum}