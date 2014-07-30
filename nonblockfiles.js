var fs = require('fs');

var callback = function(err, contents){
   console.log(contents);
};

fs.readFile('./file.txt', 'utf-8', callback);
fs.readFile('./otherfile.txt','utf-8',callback);

console.log('Doing something else');