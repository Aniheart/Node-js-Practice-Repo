const fs = require('fs');
const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

if(req.url === '/'){

    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Complete Coding</title></head>')
    res.write('<body><h1>Enter Your Details:</h1>')
    res.write('<form action="/submit-details" method="POST">')
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>')
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="male" name="gender" value="male" />')
    res.write('<label for="female">Female</label>')
    res.write('<input type="radio" id="female" name="gender" value="female" />')
    res.write('<br><input type="submit" value="Submit">')
    res.write('</form>')
    res.write('</body>')
    res.write('</html>')
return res.end()
}   
if(req.url === '/submit-details' && req.method == "POST"){
    const body = []
    req.on('data', chunk => {
        body.push(chunk)
        console.log(body)
        })
        
    req.on('end', ()=>{
const fullBody = Buffer.concat(body).toString()
console.log(fullBody);
// const BodyObject = {}
const params = new URLSearchParams(fullBody)
// for (const [key,val] of params.entries() ){
//     BodyObject[key] = val
// }
// console.log(BodyObject);
const BodyObject = Object.fromEntries(params)
console.log(BodyObject)
fs.writeFileSync('user.txt',JSON.stringify(BodyObject))

    })
}       
   
})
// SERVER END
const PORT = 3000;

server.listen(PORT, ()=>{
    console.log(`The server is running on the address localhost: ${PORT}`);
    
})