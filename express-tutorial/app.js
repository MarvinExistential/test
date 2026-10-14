console.log('Express Tutorial')
const http = require('http')
const {readFileSync} = require('fs')
// get all files
const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url === '/') {
        res.writeHead(200, {
            'content-type':'text/html'
        })
        res.write(homePage)
        res.end()
    }
    //about
    else if(req.url === '/about') {
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>about page</h1>')
        res.end()
    }
    //404
    else {
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(5000)
