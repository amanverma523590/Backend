const queryString = require('querystring')

function userData(req, resp) {

    let dataBody = [];
    req.on('data',(chunk)=>{
        dataBody.push(chunk);
    })
    req.on('end',()=>{
        let rawData = Buffer.concat(dataBody).toString();
        let readalbeData = queryString.parse(rawData);
        let dataString = `my name is ${readalbeData.Name} and my password is ${readalbeData.Password}`;
        console.log(dataString)
    })

    resp.write(`
            <h1>You can get User data from here</h1>
        `)
    resp.end();
}

module.exports = userData;