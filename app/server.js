var express = require("express");
var path = require("path");
//setting up servers 
var app = express();
var port = 8080;

//filters between the server and the application
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/'));

//Store data here
var person = [{
    questionOne: 0,
    questionTwo: 0,
    questionThree: 0,
    questionFour: 0,
    questionFive: 0,
    questionSix: 0,
    questionSeven: 0,
    questionEight: 0,
    questionNine: 0,
    questionTen0: 0
},]


app.listen(port, function () {
    console.log("Listening on port: " + port);
    
});