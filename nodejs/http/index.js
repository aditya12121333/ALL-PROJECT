const http = require('http');

 const server = http.createServer((req,res)=>{
   // console.log(req.url)
   if(req.url = "/about"){
      res.end("hello  ");
   } 
   else if(req.url = "/") 
   { 
      res.end("hello from about us page");
   } else if(req.url == " /contact "){
      res.end("hello from contact page");
   }
   else{
      res.writeHead(404)
      res.end("404 error");
   }
 });
 server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening to the port no 8000 ");
 });