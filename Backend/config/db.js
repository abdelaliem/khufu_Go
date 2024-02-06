const mysql = require('mysql2')

const connection= mysql.createConnection({
    "host": "localhost",
    "user":"root",
    "password":"",
    "database":"books",
})
module.exports = connection