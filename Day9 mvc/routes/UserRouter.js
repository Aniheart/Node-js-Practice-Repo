const express = require("express");
const userRouter = express.Router()
const { registeredHome } = require("./HostRouter");
const homescontroller = require('../Controllers/homes')
userRouter.get("/", homescontroller.GoHome)

exports.userRouter = userRouter;