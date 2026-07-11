const express = require("express");
const path = require("path")
const hostRouter = require("./routes/HostRouter");
const app = express();

const rootdir = require('./utils/pathUtil')


app.get("/", (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "home.html"))
});

app.use(express.urlencoded());
app.use("/host",hostRouter)

app.use(express.static(path.join(rootdir, 'public')))

app.use((req, res, next) => {
 res.sendFile(path.join(rootdir, "views", "404.html"))
})
const PORT = 3000;
app.listen(PORT);
console.log(`The Server is running on localhost:${PORT}`);
