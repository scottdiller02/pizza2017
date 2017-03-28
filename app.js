var http=require("http");
var server= http.createServer(function(req, res)
{
	//req: contains the request info from the web browser
	//res: to send info to web client
	res.writeHead(200, {"content-Type":"text/plain"});
	//200: server status

	res.end("Hello from Scott Diller");
});

server.listen(3000); //port: 3000(Port number is 3000)
console.log("Server is listening on port 3000");