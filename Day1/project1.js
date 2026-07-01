const { log } = require('console');
const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html' )

if(req.url == '/'){
res.write(`
    <html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    *{
        padding:0;
        margin: 0;
    }
    ul{
        padding: 20px;
        background: grey;
        display: flex;
        justify-content: space-evenly;
    }
    li{
        font-size: 20px;
        list-style-type: none;
    }
    a{
        text-decoration: none;
        text-transform: uppercase;
        color: black;
    }
</style>
<body>
    <ul>
       <a href="/home"> <li>home</li></a>
       <a href="/women"> <li>women</li></a>
       <a href="/men"> <li>men</li></a>
       <a href="/kids"> <li>kids</li></a>
        
    </ul>
</body>
</html>
    `)
        return res.end()
}

// MEN COLLECTION
if(req.url == '/men'){
    res.write(`
        <html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>men</title>
</head> 
<body>
    <h1>welcome to men collection</h1>
</body>
</html>
        `)
        return res.end()
}
// WOMEN COLLECTION
else if(req.url == '/women'){
    res.write(`
        <html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>men</title>
</head> 
<body>
    <h1>welcome to women collection</h1>
</body>
</html>
        `)
        return res.end()
}
// Home error
else if(req.url == '/home'){
    res.write(`
        <html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>men</title>
</head> 
<body>
    <h1>welcome to 404 ERROR</h1>
</body>
</html>
        `)
        return res.end()
}
// kids COLLECTION
else if(req.url == '/kids'){
    res.write(`
        <html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>men</title>
</head> 
<body>
    <h1>welcome to kids collection</h1>
</body>
</html>
        `)
        return res.end()
}

    
        
   
})
// SERVER END
const PORT = 3000;

server.listen(PORT, ()=>{
    console.log(`The server is running on the address localhost: ${PORT}`);
    
})