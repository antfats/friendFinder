var express = require("express");
var path = require("path");
//setting up servers 
var app = express();
var port = 8080;

//filters between the server and the application
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/'));


//Routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survay.html"))
})
//------------------------------------------------------------

