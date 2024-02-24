const con = require('../config/db')
const bookUsers = (busId)=>{
    return new Promise((resolve,reject)=>{
        const quary = "SELECT `lat`,`lang`,`user_name` FROM `users` WHERE `requested`=?"
        con.query(quary,[busId],(err,data)=>{
            if(data){
                resolve(data)
            }else{
                reject("can't get users")
            }
        })
         
    })
}

const applyBooks = (userId,busId)=>{
    return new Promise((resolve,reject)=>{
        
        const quary = "UPDATE `users` SET `requested`=? where `user_id`=?"
        con.query(quary,[busId,userId],(err,data)=>{
            if(data){
                resolve('applied successfully')
            }else{
                reject("can't book this bus")
            }
        })
         
    })
}

const cancelAplly = (userId)=>{
    return new Promise((resolve,reject)=>{
        const quary = "UPDATE `users` SET `requested`=0 where `user_id`=?"
        con.query(quary,[userId],(err,data)=>{
            if(data){
                resolve('canceld successfully')
            }else{
                reject("can't cancel ")
            }
        })
         
    })
}

const bookDone = (userId)=>{
    return new Promise((resolve,reject)=>{
        const quary = "UPDATE `users` SET `requested`=0 where `user_id`=?"
        con.query(quary,[userId],(err,data)=>{
            if(data){
                resolve('done successfully')
            }else{
                reject("didn't done")
            }
        })
         
    })
}
module.exports={bookUsers,applyBooks,cancelAplly,bookDone}