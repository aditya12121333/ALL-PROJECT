const http = require("http");
// const url = require("url");

const server = http.createServer((req,res) =>{
     console.log(req.url);
//    res.end("hello from the others sides aditya");
    if(req.url == "/"){

        res.end("hello aditya ): ");
    }

    else if( req.url == "/home"){
        res.end("helo from home");
    }
    else if ( req.url == "/Api"){
        res.end("hello from api");
    }
    else{
        res.writeHead(404,{"Content-type"  : "text/html"})
        res.end("<h1>404 error page, Page does not exist  </h1>");
    }
   

});

server.listen(9000,"127.0.0.1", () => {
    
    console.log("listen my server is runinng port number 9000 ");
});