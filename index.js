var express = require('express');
var fs = require('fs');

var app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.listen(3000, function(){
    console.log("Working on port 3000");
})

module.exports = app;