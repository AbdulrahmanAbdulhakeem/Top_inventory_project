const express = require("express");
require("dotenv").config();
const path = require("path");
const categoryRouter = require("./routes/categoryRoutes");
const itemsRouter = require("./routes/itemRoutes");
const app = express();
const port = 3000;

app.set("views", path.join(__dirname,"views"))
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

app.use("/",categoryRouter)
app.use("/items",itemsRouter)

app.listen(port,() => {
    console.log(`Server running on port ${port}`)
})