const express = require("express");
const bodyParser = require("body-parser")

// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
  extended:true
}));

app.get("/", function(req, res) {
res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  console.log(req.body);
// var first_name = Number(req.body.first_name);
// var last_name  = Number(req.body.last_name);
// var age        = Number(req.body.age);
  
// var result = num1 + num2 ;
  
//res.send("Addition - " + result);
});

app.listen(3000, function(){
console.log("server is running on port 3000");
})
