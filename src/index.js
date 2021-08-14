require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const routes = require("./routes")

const app = express()

mongoose.connect(
  `mongodb+srv://gabriel:${precess.env.MONGODB_PASSWORD}@clusterdb.su1jy.mongodb.net/Posts`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

app.use(routes)

app.listen(process.env.PORT || 3333)
