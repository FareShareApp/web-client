const express = require('express');
const cors = require('cors');

const app = express();


app.listen(4000, () => {
    console.log('Products server listening on port 4000')
});

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'ryanjeon',
    password: 'cheese1337',
    database: 'matches'
})
connection.connect();

connection.query('select * from matches', function(err, result){
    console.log(result);
    
    app.get('/', (req, res) => {
        res.send(result);
    })
})


