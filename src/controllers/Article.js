const createPDF = require("../utils/createPDF")

module.exports = {
  async store(request, response) {
    const { title, html } = request.body

    try {
      await createPDF({ title, html })
      return response.status(200).end()
    } catch (e) {
      return response.status(500).json(e.message)
    }
  }
}
