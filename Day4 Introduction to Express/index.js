const http = require('http')
const express = require('express')
const { log } = require('console')
const app = express()
const server = http.createServer(app)

// app.use((req, res, next)=> {
//     console.log("The path is ", req.url);
//     next()
// }) 
// app.use((req, res, next)=> {
//     console.log("The method is ", req.method);
//     next()
// }) 
// app.use((req, res, next)=> {
//     res.send(`<p>welcome to middleware</p>`)
//     next()
// }) 
app.get("/", (req, res, next)=> {
    res.send(`<p>welcome to home</p>`)
    next()
}) 
app.get("/contact-us", (req, res, next)=> {
    res.send(`
        <html lang="en">
<head>
    <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>calculator form</title>
</head>
<body>
    <h2>Welcome to calculator</h2>
    
    <form action="/contact-us" method = "post">
        <input type="text" name="a" placeholder="enter value of a:">
    <input type="text" name = "b" placeholder="enter value of b:">
    <button type = "submit" >submit</button>
   
    </form>
</body>
</html> 
        `)
    next()
}) 

app.post("/contact-us", (req, res, next)=> {
    res.send(`Form Submitted successfully`)
    next()
}) 

const PORT = 3000
server.listen(PORT)
console.log(`The Server is running on localhost:${PORT}`);
