const con = require('../config/db')
const getBusNum = (id)=>{   
    return new Promise((resolve, reject) =>
    {   
        const query = "SELECT `bus_number` FROM `bus_info` WHERE `place_id`=?"
        con.query(query,[id],(err,data)=>{
            if(data){
                resolve(data)
            }else{
                reject(err)
            }
        })
    })
}
const getBusPlaces = (busNum)=>{
    return new Promise((resolve, reject) => {
        const query = "SELECT GROUP_CONCAT(`place_id`)as 'placesId' FROM `bus_info` WHERE `bus_number`=? GROUP BY `bus_number`"
        con.query(query,[busNum],(err,data)=>{
            if(data){
                resolve(data)
            }else{
                reject(err)
            }
        })
        
    })
}
const getBusId = (busNum)=>{
    return new Promise((resolve, reject) => {
        const query = "SELECT `bus_id` FROM `buses` WHERE `bus_number`=?"
        con.query(query,[busNum],(err,data)=>{
            if(data){
                resolve(data)
            }else{
                reject(err)
            }
        })
        
    })
}
const getBusNumByBusID = (busId)=>{
    return new Promise((resolve, reject) => {
        const query = "SELECT `bus_number` FROM `buses` WHERE `bus_id`=?"
        con.query(query,[busId],(err,data)=>{
            if(data){
                resolve(data)
            }else{
                reject(err)
            }
        })
        
    })
}
const driverData = (busId)=>{
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM `drivers` WHERE `bus_id`=?"
        con.query(query,[busId],(err,data)=>{
            if(data){
                resolve(data)
            }else{
                reject(err)
            }
        })
        
    })
}
module.exports = {getBusNum,getBusPlaces,getBusId,driverData,getBusNumByBusID}