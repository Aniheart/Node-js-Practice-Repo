const fs = require('fs')
const { buffer } = require('stream/consumers')
const parsingfunction = (req, res) =>{

if(req.url === '/'){
    res.write(
        `
        <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
</head>
<body>
    <h2>Welcome to calculator page</h2>
    <a href="/calculator">Go to calculator
    </a>
</body>
</html>
        `
    )
    return res.end()
}
else if(req.url === '/calculator'){
res.write(`
 <html lang="en">
<head>
    <meta charset="UTF-8">
    <title>calculator form</title>
</head>
<body>
    <h2>Welcome to calculator</h2>
    <form action="/calculate-result" method="POST">
    <input type="number" name="a" placeholder="enter value of a:">
    <input type="number" name = "b" placeholder="enter value of b:">
    <button type = "submit" >submit</button>
    </form>
</body>
</html>   
    `)
    return res.end()
}
else if(req.url === '/calculate-result' && req.method == "POST"){
const body = []
req.on('data', chunk =>{
    body.push(chunk)
    // console.log(body);
})
req.on('end', () =>{
const fullbody = Buffer.concat(body).toString()
// console.log(fullbody);
const params  = new URLSearchParams(fullbody)
// console.log(params);
const bodyObject = {}
for(const [key, val] of params.entries()){
    bodyObject[key] = val
}
// console.log(bodyObject.a);
const result = Number(bodyObject.a) + Number(bodyObject.b)
 res.write(
        `
        <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
</head>
<body>
    <h2>Welcome to Result page</h2>
    <h2>${bodyObject.a} + ${bodyObject.b} = ${result}</h2>
    
</body>
</html>
        `
    )
    return res.end()

})
       
}
}
        module.exports = parsingfunction