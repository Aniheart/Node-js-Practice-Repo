const express = require("express");
const path = require("path")
const {hostRouter} = require("./routes/HostRouter");
const {registeredHome} = require("./routes/HostRouter");
const app = express();
const homescontroller = require('./Controllers/homes')

const { userRouter } = require("./routes/UserRouter");
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static("public"));


app.use(userRouter)
app.use(express.urlencoded());
app.use("/host",hostRouter)


app.use(homescontroller.page404)
const PORT = 3000;
app.listen(PORT);
console.log(`The Server is running on localhost:${PORT}`);
