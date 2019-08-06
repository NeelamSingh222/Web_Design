var express=require("express");
var app=express();

//hi there
app.get("/",function(req,res){
	res.send("hi there");
});


app.get('/me',function(req,res){
	res.send("o yo");
});

app.get('/r/:sss/:vv',function(req,res){
	var sub=req.params.sss;
	res.send("welcome to "+sub.toUpperCase());
	res.send("ololo");
});

app.get('*',function(req,res){
	res.send('you are a star');
});

app.listen(3000,'127.0.0.1',function(){
	console.log("server started");
})
