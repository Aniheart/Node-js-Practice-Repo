const express = require('express')
const app = express()

const cityrouter = require('./routes/CityDetails')

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static("public"));

app.use(express.urlencoded())
app.use(cityrouter)



const PORT = 3000
app.listen(PORT)
console.log(`server is running on localhost:${PORT}`);
