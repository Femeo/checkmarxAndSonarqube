var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();

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
    if(req.body.username == 'root' && req.body.password == 'pa55word'){
        res.sendFile(__dirname + "/success.html");
    } else{
        res.sendFile(__dirname + "/index.html");
    }
})

module.exports = app;