var http = require('http');

var server = http.createServer(function(request, response){
	response.writeHead(200);
	response.write("Hello world");
	response.end();
});

server.listen(3000);

console.log("Server is running at localhost:8000");

