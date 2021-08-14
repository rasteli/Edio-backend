const path = require("path")

module.exports = {
  index(request, response) {
    const title = request.query.title
    const pathToFile = path.resolve(
      __dirname,
      "..",
      "..",
      "pdf",
      `${title}.pdf`
    )

    response.append("Access-Control-Expose-Headers", "ETag")
    return response.download(pathToFile, `${title}.pdf`)
  }
}
