const http = require('http')
const fs = require('fs')

const PORT = 3001;

const server = http.createServer((req, resp) => {

    if (req.url === '/') {
        fs.readFile('./HTML/home.html', 'utf-8', (err, data) => {
            if (err) {
                resp.writeHead(500, { 'content-type': 'text/plain' });
                resp.end("Internal server error");
                return false;
            }
            else {
                resp.write(data)
                resp.end();
            }
        })
    }else if(req.url==='/home.css'){
        fs.readFile('./HTML/home.css', 'utf-8', (err, data) => {
            if (err) {
                resp.writeHead(500, { 'content-type': 'text/plain' });
                resp.end("Internal server error");
                return false;
            }
            else {
                resp.writeHead(200,{'content-type':'text/css'})
                resp.write(data)
                resp.end(data);
            }
        })
    }


})

server.listen(PORT);
console.log(`running on port ${PORT}`)