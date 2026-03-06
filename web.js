const http = require('http')
const fs = require('fs')

const PORT  = 3001;

const server = http.createServer((req,resp)=>{
    fs.readFile('index.html','utf-8',(err,data)=>{
        if(err){
            resp.writeHead(500,{'Content-Type' : 'text/plain'})
            resp.write('error aya ga',err)
            resp.end();
        }else{
            resp.writeHead(200,{'Content-Type':'text/html'})
            resp.write(data);
            resp.end()
        }
    })
})
server.listen(PORT)
