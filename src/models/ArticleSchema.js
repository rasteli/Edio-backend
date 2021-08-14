const mongoose = require("mongoose")

const ArticleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: Array,
    required: true
  }
})

module.exports = mongoose.model("Article", ArticleSchema)
