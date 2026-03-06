const http = require('http')
const userForm = require('./userForm')
const userData = require('./userData')

const PORT = 3001;

const server = http.createServer((req,resp)=>{
    if(req.url==="/"){
        userForm(req,resp)
    }else if(req.url==="/submit"){
        userData(req,resp)
    }
    resp.end();
})
server.listen(PORT);
console.log(`Sever Running at port ${PORT}`)