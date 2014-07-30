var fs = require('fs');

var contents = fs.readFileSync('./file.txt','utf-8');
console.log(contents);
console.log('Doing something else');