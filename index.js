var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
})

connection.connect(function(err){
    if(err){
        console.log('error connecting: ' + err.stack);
        return ;
    }

    console.log('connected as id ' + connection.threadId);
    connection.query('use checkmarxusers;');
    connection.query('SELECT * from users;', function(error, result){
        console.log(result[0]);
        console.log("error: " + error);

    });
});


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/', express.static('public'));


app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.get('/availableUsernames', function(req, res){
    usernames = ["root"];
    res.send(usernames)
});

app.get('/availablePasswords', function(req, res){
    passwords = ["pa55w0rd"];
    res.send(passwords);
})

app.listen(3000, function(){
    console.log("Working on port 3000");
})

app.post('/login', function(req, res){
    var users = [];
    connection.query('SELECT username, pass_word from users;', function(error, resultSet){
        var count = 0;
        for(user in resultSet){
            if(req.body.username == resultSet[user].username && req.body.password == resultSet[user].pass_word){
                res.sendFile(__dirname + "/success.html");
                return ;
            } else{
                count ++;
            }
            if(count == resultSet.length){
                res.sendFile(__dirname + "/index.html");
            }
        }       
    })
})

module.exports = app;