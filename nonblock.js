var fs = require('fs');

fs.readFile('./file.txt', 'utf-8',function(err, contents){
   console.log(contents);
});

console.log('Doing something else');