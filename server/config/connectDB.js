const mysql = require('mysql2');
require('dotenv').config()

// Create a database connection 
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.PASSWORD,
    database:  process.env.DATABASE,
    port: 3306
});

// Connect to the database
connection.connect(function (err) {
    if (err) {
        console.log('Error connecting to Db ' + err);
        return;
    }
    console.log('Connection established');
});

// Export connection
module.exports = connection;