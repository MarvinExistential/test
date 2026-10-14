const http = require('http')

const server = http.createServer()
//emits request event



const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, age) => {
    console.log(`data recieved ${name} ${age}`)
})


customEmitter.on('response', () => {
    console.log(`data recieved 2`)
})

customEmitter.emit('response', 'john', 250)

server.on('request', (req, res) => {
    res.end('Welcome')
})
