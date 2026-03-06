const http = require('http')

const PORT = 3001;

const server = http.createServer((req,resp)=>{
    // console.log('the request file is ',req.url);

    if(req.url === '/'){
        resp.write('this is home page')
    }else if(req.url === '/login'){
        resp.write('this is login page')
    }else{
        resp.write('other page')
    }
    resp.end();
})
server.listen(PORT);