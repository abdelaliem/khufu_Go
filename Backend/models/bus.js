
const con = require('../config/db')
const getBusNum =  (lat,lang,id )=>{   
    // const getId = async()=> {await fetch("http://localhost:3000/place/31.32/30.78")
    // .then(response => { return response.json()})
    // .then(place => console.log(place))
    // .catch(err => console.log(err))      }
    // console.log(getId())
    // const getId = con.query("SELECT `place_id` FROM `places`",(err,data)=>{
    //     return data
    // })

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