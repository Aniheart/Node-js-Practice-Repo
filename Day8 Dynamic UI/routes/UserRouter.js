const express = require("express");
const path = require("path")
const userRouter = express.Router()
const { registeredHome } = require("./HostRouter");

userRouter.get("/", (req, res, next) => {
res.render('home', {registeredHome: registeredHome, pageTitle: 'airbnb Home'})
})

exports.userRouter = userRouter;