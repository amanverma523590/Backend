const fs = require('fs')

// fs.writeFileSync("./FS_File/apple.txt","Hi i am apple")

// fs.unlinkSync('./FS_File/lund.txt')

// const data = fs.readFileSync('./FS_File/apple.txt','utf-8');
// console.log(data)
// fs.appendFileSync('./FS_File/apple.txt','\n this is new data')

//create
const operation = process.argv[2];
if(operation==='write'){
    const name = process.argv[3];
    const content = process.argv[4];
    console.log(operation,name,content)

    fs.writeFileSync('FS_File/'+name+".txt",content)
}

//read
else if(operation==="read"){
    const name = process.argv[3];
    let data = fs.readFileSync('./FS_File/'+name+".txt",'utf-8')
    console.log(data)
}

else if(operation==='update'){
    const name = process.argv[3];
    const data = process.argv[4];

    fs.appendFileSync('./FS_File/'+name+'.txt',data)
}

else if(operation==='delete'){
    const name = process.argv[3];

    fs.unlinkSync('./FS_File/'+name+'.txt');
}