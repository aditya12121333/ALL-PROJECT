//2nd way
// Reading for stream
//craeting a readble data
//handle stream events => data ,end , server , and error




const fs = require('fs');

const http = require('http');

const server = http.createServer();

server.on("request", (req, res) => {
    var fs = require("fs");
    fs.readFile('input.txt', function (err, data) {
        if (err) return console.error(err);
        res.end(data.toString());
    });
})
server.listen(9000, "127.0.0.1");
