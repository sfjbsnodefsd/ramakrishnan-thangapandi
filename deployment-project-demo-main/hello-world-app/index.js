// console.log("Hello this is Nishant, I hope you are having a great day! ");

const http = require('http');

function greet(req,resp) {
    resp.writeHead(200,{'Content-Type':'application/json'});
    resp.write(JSON.stringify({
        "name":"Rama",
        "Empid": "001",
     
        "address":{ 
            "street": "Tamil street",
            "city" :"chennai",
            "State": "tamilnadu"
        }
     }))
    resp.end();
}

http.createServer(greet).listen(5000);