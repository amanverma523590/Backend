    const http = require('http');

    const PORT = 3001;

    const server =  http.createServer((req,res)=>{
        res.setHeader('Content-type','text/html')
        res.write( "<h2>i am aman</h2>");
        res.end()
    });

    server.listen(PORT);


