let http = require('http')
const { json } = require('stream/consumers')
const data = {
    name : "salah",
    lastname :"halli",
    address: "19 elhouda agadir bloc c"
}
let server = http.createServer((req,res)=>{
    if (req.url == "/me") {
        res.end(JSON.stringify(data))

        
    }if (req.url == "/me/name") {
        res.end(JSON.stringify(data.name))
        
    } 
    if (req.url == "/me/address") {
        res.end(JSON.stringify(data.address))
        
    }
    if (req.url == "/me/lastname") {
        res.end(JSON.stringify(data.lastname))
        
    }else{
        res.end("this route is'nt working")
    }

})

server.listen(8080)



