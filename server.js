var express = require("express");
var mongoose = require("mongoose");
var contact = require("./model/contact");
var bodyParser = require("body-parser");

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost/mydata",function(){
	console.log("Successfully Connected to Database!!!")
})
router.get("/",function(req,res){
res.send({message:"Hello Hyderabad !!"})
});


/*
app.get("/person",function(req,res){
var person = {
	firstName: "Sravya"
}
var contact = {
	city : "Hyd"
}
res.json(
	{
		person,
		contact
	});
})*/

router.get("/contact",function(req,res){
contact.getContact(function(err,contact){
if(err){
throw err;
}
console.log(contact);
res.json(contact);
})
});
router.post("/contact",function(req,res){
	var body =req.body;
	contact.addContact(body,function(err,data){

		if(err){
			throw err;
		}
		res.json(data)

	})
})
router.put("/contact/:id" ,function(req,res){
var id = req.params.id;
var body = req.body;
contact.updateContact(id,body,function(err,details){

		if(err){
			throw err;
		}
		res.json(details);

})

router.delete("/contact/:id",function(req,res){
	var id = req.params.id;
	contact.removeContact(id,function(err,deletedetails){
		if(err){
			throw err;
		}
		res.json(deletedetails);

	})

})
})
app.use("/",router);
var PORT = process.env.PORT || 4000;
app.listen(PORT, function(){
	console.log("Server is listening at port" +PORT);
})