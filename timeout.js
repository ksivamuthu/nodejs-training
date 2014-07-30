var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200);
	response.write('Program is running');
	setTimeout(function(){
		response.write('Program is done');
		response.end();
	},10000);
}).listen(8080);

console.log("server is running at localhost:8080");