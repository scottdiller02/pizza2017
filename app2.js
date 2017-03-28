var express=require("express");

var app=express();

//handle get request from browser
app.get('/menu',function(req, res){
	//req: request from the browser
	//res: response from server to the browser
	console.log("a request from menu!"); //print log on server
	res.send("<h2> Handling the request from menu. wait....!</h2>")

});

app.get('/main',function(req, res){
	//req: request from the browser
	//res: response from server to the browser
	console.log("a request from menu!"); //print log on server
	res.send("<h2> Handling the request from main. wait....!</h2>")

});

app.get('/about',function(req, res){
	//req: request from the browser
	//res: response from server to the browser
	console.log("a request from menu!"); //print log on server
	res.send("<h2> Handling the request from about. wait....!</h2>")

});

app.use(function(req, res, next){
	//next: is callback function after this function is done

	res.type("text/plain");
	res.status(404);
	res.send("404-Not Found");
});

app.listen(3000, function(){
	console.log("Server is up on port 3000");

});