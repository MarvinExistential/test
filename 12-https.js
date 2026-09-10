const http = require('http');

const server = http.createServer((req, res)=> {
    //console.log(req)
    if(req.url === '/') {
        res.end('Welcome to our home page')
        return;
    }

    if(req.url === '/about') {
        res.end('Welcome to about page')
        return;
    }
    res.end('<h1><em>GAHBO</em>IFHOIHAGHPOH</h1>s<a href=\'/\'>Home</a>')
})

server.listen(5000)
 