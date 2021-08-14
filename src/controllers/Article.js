const ArticleSchema = require("../models/ArticleSchema")
const createPDF = require("../utils/createPDF")

module.exports = {
  async index(request, response) {
    const articles = await ArticleSchema.find()

    return response.json(articles)
  },

  async store(request, response) {
    const { title, body, html } = request.body

    if (!title || !body)
      return response.json({
        error: "All articles must have a title and a body,"
      })

    let article = await ArticleSchema.findOne({ title })

    if (!article) {
      article = await ArticleSchema.create({
        title,
        body
      })

      await createPDF({ title, html })

      return response.status(200).end()
    }

    return response.json({ error: "Article already exists in database." })
  },

  async delete(request, response) {
    const id = request.params.id

    const article = await ArticleSchema.findOneAndDelete({ _id: id })

    return response.json(article)
  }
}
