const http = require('http')

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url ==='/about'){
        res.end('here is our ntheelm')
    }
    res.end(`
    <h1>Ooops!</h1>
    <P> page not found</p>
    
    `)
})

server.listen(5000)