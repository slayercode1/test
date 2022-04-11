# Configuration Server avec Mysql comme databasse

1. npm init -y
2. npm install --save-dev nodemon
3. npm install express mysql2 dotenv

> Créer un index.js

> Créer un .env

```env
PORT=
HOST='localhost'
DBUSER=''
PASSWORD=''
DATABASE=''
```

> Créer un dossier congif, crée un connectDb.js

```js
connectDb.js

const mysql = require('mysql2');

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
        console.log('Error connecting to Db' + err);
        return;
    }
    console.log('Connection established');
});

// Export connection
module.exports = connection;
```

> Crée un router.js

```js
const router = require('express').Router();
const connect = require('../config/connectDB');

router.get('/', (req, res) => {
    res.send('connecting to server is ready');
});


router.get('/', (req, res) => {
    let sql = 'SELECT * FROM users';
    connect.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else{
            res.json(rows);
        }
    });
});

module.exports = router;
```