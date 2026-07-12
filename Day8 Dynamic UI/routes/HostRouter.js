const express = require("express");
const path = require("path")
const hostRouter = express.Router()
const rootdir = require("../utils/pathUtil")

hostRouter.get("/add-home", (req, res, next) => {
res.render('addHome', {pageTitle:'Add Home to airbnb'})
})
const registeredHome = []
hostRouter.post("/add-home",(req,res, next)=>{
res.render('homeAdded', {pageTitle: 'Home added successfully'})   
    registeredHome.push({houseName : req.body.houseName, price:req.body.price, location:req.body.location,
        rating:req.body.rating, photo:req.body.photo,
    })
    
})
exports.hostRouter = hostRouter;
exports.registeredHome = registeredHome;

