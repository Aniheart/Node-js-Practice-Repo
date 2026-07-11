const express = require("express");
const path = require("path")
const hostRouter = express.Router()
const rootdir = require("../utils/pathUtil")

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "addHome.html"))
})

hostRouter.post("/add-home",(req,res, next)=>{
    res.sendFile(path.join(rootdir, "views" , "homeAdded.html"))
})

module.exports = hostRouter

