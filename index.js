var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'checkmarxusers'
})

connection.connect();


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/', express.static('public'));


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.listen(3000, function () {
    console.log("Working on port 3000");
})

app.post('/login', function (req, res) {
    var users = [];
    connection.query('INSERT INTO users (username, pass_word) VALUES (\'' + req.body.username + '\' , \'' + req.body.password + '\');', function(err){
        connection.query('SELECT username, pass_word from users;', function (error, resultSet) {
        var count = 0;
        for (user in resultSet) {
            if (req.body.username == resultSet[user].username && req.body.password == resultSet[user].pass_word) {
                res.sendFile(__dirname + "/success.html");
                return;
            } else {
                count++;
            }
            if (count == resultSet.length) {
                res.sendFile(__dirname + "/index.html");
            }
        }
    })
});


})

module.exports = app;