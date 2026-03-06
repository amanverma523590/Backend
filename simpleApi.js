const http = require('http');

const PORT = 3001;

const data = [
    {
        name:"Aman",
        age:26,
        email : 'aman@gmail.com'
    },
    {
        name:"Sanam",
        age: 32,
        email : 'sanam@yahho.com'
    },
    {
        name:"Sahl",
        age:24,
        email : 'shil1545@mail.com'
    },
]


const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json')
    res.write(JSON.stringify(data))
    res.end();
})
server.listen(PORT) 