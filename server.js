
console.log('Simple server example');
console.log('Starting server');

var http = require('http');
function requestHandler(req,res){
    console.log('inside request handler');
    res.writeHead(200,{
        'Content-Type':'text/plain',
    })
res.end('hello there \n');
}

var server = http.createServer(requestHandler);
server.listen(5000);


