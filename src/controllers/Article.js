const createPDF = require("../utils/createPDF")

module.exports = {
  async store(request, response) {
    const { title, body, html } = request.body

    if (!title || !body)
      return response.json({
        error: "All articles must have a title and a body,"
      })

    try {
      await createPDF({ title, html })
      return response.status(200).end()
    } catch (e) {
      return response.status(500).json(e.message)
    }
  }
}
