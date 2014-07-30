var express = require('express');

var app = express();

app.get("/", function(req,res){
   res.writeHead(200);
   res.write("Hello CEI Trainings");
   res.end();
});

app.get("/trainings", function(req, res){
	res.writeHead(200);
	res.write("[{title:'nodejs',trainer:'siva'},{title:'aspnet',trainer:'gana'}]");
	res.end();
});

app.listen(8200);


