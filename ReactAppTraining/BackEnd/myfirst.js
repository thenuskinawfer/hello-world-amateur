const http = require('http');
const url = require('url')
const DisplayDate = require('./myfirstmodule')
const readfile = require('fs')

http.createServer(function (req,res) {
    res.writeHead(200,"Status Message Successfull"); //This is the request header of the HTTP Request, you can view this in Inspect

    //res.write(`Message : ${DisplayDate.myDateTime()}`) //Response passed to the client

    //res.write(req.url) //Get the URL Endpoint

    //const divide = url.parse(req.url,true).query;
    //const closingmessage = divide.year;
    //res.end(closingmessage); Splitting the Query String

    readfile.readfile('myfirsthtml.html', function(err,data) {
        res.write(data);
    })


}).listen(8080);