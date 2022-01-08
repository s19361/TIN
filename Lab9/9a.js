var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());


app.post('/', function (req, res) {
    var data = req.body;
    console.log(data);
    var num1 = parseFloat(data["num1"]);
    var num2 = parseFloat(data["num2"]);
    var op = data["operator"];
    var result;

    switch(op){
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        case 'div':
             result = num1 / num2;
             break;
        default:
            result = 'Inappropriate input';
    }
    data["result"] = result;
    res.json(data);

 })

var server = app.listen(8080, function() {
    var port = server.address().port;
    console.log('Started on port: ' + port);
})