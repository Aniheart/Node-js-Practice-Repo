const http = require('http')
const express = require('express')
const app = express()
const aboutRouter = require('./routes/about')
const server = http.createServer(app) 

app.get("/", (req, res, next)=> {
    res.send(`<h1>welcome to home</h1>
        <a href = "/about-home">Go to about home tab</a>
        `)
        console.log(req.method, req.url);
}) 
app.use(aboutRouter)





const PORT = 3000
server.listen(PORT)
console.log(`The Server is running on localhost:${PORT}`);
