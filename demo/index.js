let express = require('express')
const logger = require('../app.js')
let server = express()

server.get('/name',(req,res)=>{
    res.end('salah')

})

server.get('/',(req,res)=>{
    res.end("module")
})
console.log(logger);
server.listen(8080)