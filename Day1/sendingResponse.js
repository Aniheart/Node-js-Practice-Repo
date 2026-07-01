const { log } = require('console');
const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html' )
    res.write(`
        <html>
            <head>
                <title>
                First Node Response
                </title>
            </head>
                    <body>
                        <h1>Response is sent</h1>
                    </body>
        </html>
        `)
        res.end()
    process.exit()
})
const PORT = 3000;

server.listen(PORT, ()=>{
    console.log(`The server is running on the address localhost: ${PORT}`);
    
})