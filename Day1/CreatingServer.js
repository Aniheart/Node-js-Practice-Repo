const { log } = require('console');
const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req);
})
const PORT = 3000;

server.listen(PORT, ()=>{
    console.log(`The server is running on the address localhost: ${PORT}`);
    
})