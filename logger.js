const event = require('events')
const emmiter = new event()

emmiter.on('hello',(arg)=> console.log('hello is called',arg))
setTimeout(()=>{emmiter.emit('hello',{id:1,url:'https://'})},10000)

