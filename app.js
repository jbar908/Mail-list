var express = require ("express");
var bodyParser = require("body-parser");
var request = require("request");

var app = express();


app.use(express.static("/"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    console.log("Post Received big dog")
});



app.listen(3000, function() {
    console.log("Server is fired up on port 3k")
})