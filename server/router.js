const router = require('express').Router();
const { Router } = require('express');
const connect = require('./config/connectDB');


//------------------ SELECT ------------------
router.get('/', (req, res) => {
    let sql = 'SELECT * FROM users';
    connect.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else{
            res.json(rows);
        }
    });
});


//------------------ SELECT BY ID ------------------
router.get('/:id', (req, res) => {
    const { id } = req.params;
    let sql = 'SELECT * FROM users WHERE id = ?';
    connect.query(sql,  [id] , (err, rows, fields) => {
        if (err) throw err;
        else{
            res.json(rows);
        }
    });
})


//------------------ SELECT BY ID ------------------
router.post('/', (req, res) => {
    const { name, identifiant } = req.body;
    let sql = 'INSERT INTO users (name, identifiant) VALUES (?, ?)';
    connect.query(sql,  [name, identifiant] , (err, rows, fields) => {
        if (err) throw err;
        else{
            res.json({status: 'ok'});
        }
    });
})


//------------------ DELETE BY ID ------------------
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    let sql = 'DELETE FROM users WHERE id = ?';
    connect.query(sql,  [id] , (err, rows, fields) => {
        if (err) throw err;
        else{
            res.json({status: 'delete'});
        }
    });
})


//------------------ DELETE ALL ------------------
router.delete('/', (req, res) => {
    let sql = 'DELETE FROM users';
    connect.query(sql,  (err, rows, fields) => {
        if (err) throw err;
        else{
            res.json({status: 'delete'});
        }   
    });
})


//------------------ UPDATE BY ID ------------------
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, identifiant } = req.body;
    let sql = 'UPDATE users SET name = ?, identifiant = ? WHERE id = ?';
    connect.query(sql,  [name, identifiant, id] , (err, rows, fields) => {
        if (err) throw err;
        else{
            res.json({status: 'update'});
        }
    });
})


// search by name or identifiant
router.get('/search/:name', (req, res) => {
    const { name } = req.params;
    let sql = 'SELECT * FROM users WHERE name = ? OR identifiant = ?';
    connect.query(sql,  [name, name] , (err, rows, fields) => {
        if (err) throw err;
        else{
            res.json(rows);
        }
    });
})

module.exports = router;
