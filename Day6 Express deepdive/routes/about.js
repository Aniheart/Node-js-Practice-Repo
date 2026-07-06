const express = require('express')
const aboutRouter = express.Router()

aboutRouter.get("/about-home", (req, res, next)=> {
    res.send(`
    <form action="/about-home" method = "post">
        <input type="text" name="address" placeholder="enter address:">
    <button type = "submit" >submit</button>
   
    </form>

        `)
}) 
aboutRouter.post("/about-home", (req, res, next)=> {
    res.send(`
    <h2>form submitted successfully</h2>

        `)
}) 
module.exports  = aboutRouter