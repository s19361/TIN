const http = require("http");
const url = require("url");
const port = 5000;

http.createServer((req, res) =>
    {
        res.writeHead(200, {"Content-Type": "text/html"});

        const queries = url.parse(req.url,true).query;
        const queriesCheck = url.parse(req.url).query;

        const {number1, number2 } = queries;
        const reqUrl = url.parse(req.url).pathname;

        if (queriesCheck === null
            || number1 === null
            || number2 === null
            || !isNumber(number1)
            || !isNumber(number2)
            ){

            res.write("<h1>You need to enter parameters as url queries in format ?number1=23&&number2=55 </h1>");
            res.end();
        }
        else{
            if (reqUrl === "/add")
            {
                const sum =  parseInt(number1) + parseInt(number2);

                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(`<h1>Result of ${number1} + ${number2} = ${sum} </h1>`);
                res.end();
            }
            if (reqUrl === "/sub")
            {

                const sum =  parseInt(number1) - parseInt(number2);

                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(`<h1>Result of ${number1} - ${number2} = ${sum} </h1>`);
                res.end();
            }
            if (reqUrl === "/mul")
            {
                const sum =  parseInt(number1) * parseInt(number2);

                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(`<h1>Result of ${number1} x ${number2} = ${sum} </h1>`);
                res.end();
            }
            if (reqUrl === "/div")
            {

                const sum =  parseInt(number1) / parseInt(number2);

                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(`<h1>Result of ${number1} / ${number2} = ${sum} </h1>`);
                res.end();
            }
        }

    })
    .listen(port, () =>
    {
        console.log(`Server listening on port ${port}...`);
    });

function isNumber(str) {
    if (typeof str != "string") return false
    str = ""+str
    return !isNaN(str) && !isNaN(parseFloat(str))
}