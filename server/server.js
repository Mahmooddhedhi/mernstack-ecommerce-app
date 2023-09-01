const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const mongoose = require("mongoose")
require('./config/db')
const PORT = 5000
const DefaultData = require('./defaultdata')
const Items = require('./models/itemsModel')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"));

// connect to the mongodb database
/* connectDB() */

app.use('/api/items', require("./routes/items"))
app.use('/api/payment', cors(), require("./routes/payment"))

app.listen(PORT, console.log("Server is running on port ", PORT))

DefaultData();