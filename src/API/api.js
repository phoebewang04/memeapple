const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const member = require('./member');

const app = express();
const port  = 5173;

app.use(cors());

// create connection to DB
const db = mysql.createConnection({
    host: 'localhost',
    database: 'MemeStudio',
    user: 'root',
    password: 'password',
});

// connect to DB
db.connect((err) => {
    if(err) {
        console.error('Error connecting to DB: ', err.stack);
        return;
    }
    console.log('Connected to database');
});

// APIs
app.use('/api/member', member(db));  //會員資料管理功能API

// start the Express.js server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});


