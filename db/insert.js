var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'ryanjeon',
    password: 'cheese1337',
    database: 'matches'
})
connection.connect();

var match = {
    destination: 'Some Other Place',
    time_buffer: '20',
    body: 'some description'
}

var query  = connection.query('insert into matches set ?', match, function (err, result){
    if (err){
        console.error(err);
        return;
    }
    console.log(query.sql);
    console.log(result);
})