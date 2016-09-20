var express = require('express');
var fs = require('fs');

var app = express();
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

module.exports = app;