const express = require("express");
const hostRouter = express.Router()
const homesController = require("../Controllers/homes")

hostRouter.get("/add-home",homesController.getAddHome )

hostRouter.post("/add-home",homesController.Getdetails)
exports.hostRouter = hostRouter;


