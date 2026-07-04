    const http = require('http')
const parsingfunction1 = require('./parsingCondition')
const server = http.createServer(parsingfunction1)

const PORT = 3000
server.listen(PORT, ()=>{
    console.log(`server running on localhost:${PORT}`);
    
})