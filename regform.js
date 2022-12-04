const express    = require('express');
const bodyParser = require('body-parser');
var   db  		 = require('./app');
// new app using express module 	
const app = express();
//app.use(express.static('./public'));
app.use(bodyParser.urlencoded({
extended:true
}));

app.get("/form",function(req,res){

    res.sendFile(__dirname + "/index2.html");

});

app.post("/",function(req,res){
	console.log(req.body);
});

app.get('/insert_data',(req,res)=>{
db.main(req.body);
console.log("Successfullu Inserted..!");

});

app.listen(3000, function(){
console.log("server is running on port 3000");
})