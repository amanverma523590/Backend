const http = require('http')

const  arg = process.argv;
const port = arg[2];

http.createServer((req,resp)=>{
    resp.write('ha kya hal hai snbdbahdcdsfsfsddddfbh')
    resp.end();
}).listen(port)


const argv = process.argv;


