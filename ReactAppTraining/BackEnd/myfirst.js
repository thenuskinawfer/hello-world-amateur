const http = require('http');
const url = require('url')
const DisplayDate = require('./myfirstmodule')
const readfile = require('fs')
const mssql = require('mssql')

http.createServer(function (req,res) {
    res.writeHead(200,"Status Message Successfull"); //This is the request header of the HTTP Request, you can view this in Inspect

    //res.write(`Message : ${DisplayDate.myDateTime()}`) //Response passed to the client

    //res.write(req.url) //Get the URL Endpoint

    //const divide = url.parse(req.url,true).query;
    //const closingmessage = divide.year;
    //res.end(closingmessage); Splitting the Query String

    // readfile.readfile('myfirsthtml.html', function(err,data) {
    //     res.write(data);
    // })

    const config = {
        user:'nuski',
        password:'JungleFever@19911',
        server:'mytrainingdatabase.database.windows.net',
        database:'MyTrainingDatabase',
        options: {
            encrypt:true,
            trustUserCertificate:false

        }
    }

    async function newConnection(){
        try {
            let connection = await mssql.connect(config)
            console.log(`Connected to MySQL : ${connection}`)
        } catch (err) {
            console.error('Connection Failed',err)
        }
    }

    newConnection()

}).listen(8080);