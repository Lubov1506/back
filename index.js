const http = require('http')
const fs=require('fs')
const PORT = 3000
const requestListener = (req, res) =>{
fs.readFile('./views/index.html', 'utf-8', (err, data)=>{
    if(err){
        console.log(err);
    }
    res.end(data)
})
}
const server = http.createServer(requestListener)
server.listen(PORT)
















/* const http = require('http')
const PORT = 3000

let count = 0
const requestListener = (req,res) => {
    res.end(`hello from node! ${count++}`)
}
const server = http.createServer(requestListener);

server.listen(PORT) */