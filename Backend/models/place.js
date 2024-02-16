const con = require('../config/db')

const getAllPlaces = () =>{
    return new Promise((resolve, reject) => {
       const query = " SELECT * FROM `places` ";
        con.query(query, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });

}
const getPlaceName = (id)=>{
  return new Promise((resolve, reject) => {
    const query = " SELECT `place_name` FROM `places` WHERE `place_id`=? ";
     con.query(query,[id], (err, result) => {
       if (err) {
         reject(err);
       } else {
         resolve(result);
       }
     });
   });
}
//get place id of specific (lat,lang)
const getPlaceId = (lat,lang)=>{
return new Promise((resolve,reject)=>{ 
const query = "SELECT `place_id` FROM `places` WHERE `place_lat`=? AND `place_lang`=?"
con.query(query,[lat,lang],(err,data)=>{
  if(data){
    resolve(data)
  }else{
    reject(err)
  }
})
})
}
module.exports = {getAllPlaces,getPlaceId,getPlaceName}