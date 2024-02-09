
const con = require('../config/db')
const getBusNum =  (id)=>{   
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

module.exports = {getBusNum}