// const http = require('http')

// const PORT = 3001;

// const server = http.createServer((req, resp) => {
//     resp.writeHead(200, { 'Content-Type': 'text/html' })
//     console.log(req.url)

//     if (req.url === "/") {
//         resp.write(`
//             <form action="/submit" method="post">
//                 Name: <input type="text" name="Name"/> <br/><br/>
//                 Password: <input type="password" name="Password"/> <br/><br/>
//                 <button>Submit</button>
//             </form>
//         `)
//     }else if(req.url === "/submit"){
//         resp.write("<h1>Data Submitted</h1>")
//     }

//     resp.end();
// })

// server.listen(PORT)
// console.log(`Server running at Port ${PORT}`)

const http = require('http');
const fs = require('fs')
const queryString = require('querystring')

const PORT = 3001;

const server = http.createServer((req,resp)=>{
    fs.readFile('./HTML/fromHTML.html','utf-8',(err,data)=>{
        
        if(err){
            resp.writeHead(500,{"content-type":'text/plain'})
            resp.end('Error ayaga bhiya')
        }else if(req.url==="/"){
            resp.writeHead(200,{'Content-type':'text/html'})
            resp.write(data)
        }else if(req.url==="/submit"){

            let dataBody = [];  //collecting the chunks

            req.on('data',(chunk)=>{
                dataBody.push(chunk)
            })
            
            req.on('end',()=>{
                let rawData = Buffer.concat(dataBody).toString();
                let readableData = queryString.parse(rawData)

                let dataString = `My name is ${readableData.Name} and pasword is ${readableData.Password}`;

                console.log(dataString)

                // fs.writeFileSync("Text/"+readableData.Name+" ".txt,dataString);
                // console.log('file created')

                fs.writeFile("Text/aman.txt",dataString,"utf-8",(err)=>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log('ban gaya')
                    }
                })
            })

            resp.write("<h1>Form submitted successfully......</h1>")
        }else{
            resp.write('You are in wrong page buddy')
        }
        resp.end()
    })
})
server.listen(PORT);
console.log(`Sever workining at port ${PORT}`)