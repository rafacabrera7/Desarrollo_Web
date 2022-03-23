const main = require("./connect");

var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hola Mundo');
}).listen(3000);    

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());