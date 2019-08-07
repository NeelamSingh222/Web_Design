var express=require("express");
var app=express();

app.get("/love/:t",function(req,res){
	var name=req.params.t;
	res.render('../k.ejs',{names:name});
});

app.listen(3000,'127.0.0.1',function(){
	console.log("server is started ");
});
