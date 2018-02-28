var http = require("http");
var port1 = 7000;
var port2 = 7500;
var handleRequest1 = function (request, response){
    response.end("You are great!" + request.url);
}
var handleRequest2 = function (request, response){
    response.end("Thou art less than stellar sir or madam!" + request.url)
}
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);
server1.listen(port1, function(){
    console.log("server1 listening on: http://localhost:%s", port1)
});
server2.listen(port2, function(){
    console.log("server2 listening on: http://localhost:%s", port2)
})
