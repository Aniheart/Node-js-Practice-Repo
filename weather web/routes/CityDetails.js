const express = require('express')
const cityrouter = express.Router()
require('dotenv').config()
cityrouter.post("/city-detail", async (req, res, next)=>{
const DataArray = []
    try{
        const apikey = process.env.WEATHER_API_KEY

        const city = req.body.city
        
        const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
            
        )
        const data = await response.json()
        DataArray.push({
           Clouds:data.weather[0].main,
           Humidity:data.main.humidity,
           Wind_speed:(data.wind.speed * 3.6).toFixed(2),
           Cloudy:data.clouds.all,
           City:data.name

        })

res.render("weatherData", {
    weatherData: DataArray
})
        console.log( data.weather[0].main, "\nhumidity", data.main.humidity,
            "\nwind speed ", data.wind.speed, "\ncloudy ", data.clouds.all,"%",

            "\nCity",data.name
        );

    } catch(err){
        res.send("something went wrong")
    }

})
cityrouter.get("/", (req, res, next)=>{
    res.render('home')
})

cityrouter.use("", (req, res, next)=>{
    res.status(404).render('page404')
})

module.exports = cityrouter


