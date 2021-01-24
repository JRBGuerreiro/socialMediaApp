const express = require('express');
const router = express.Router()
const db = require('../config/database')

router.get("/register", (req, res) => {
    db.query("INSERT INTO users (username, password) VALUES ('maria', 'password');", (err, results) => {
        console.log('inserting ' + results);
        console.log('errors are' + err);
        res.send(results);
    });
});

module.exports = router;