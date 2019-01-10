
console.log('Simple server example');
console.log('Starting server');

var http = require('http');


http.createServer(function(req,res){
    console.log('Fulfilling request');
    res.writeHead(200,{

        'Content-Type':'text/plain'
    });
    res.end('Request obtained');
})
.listen(4000);