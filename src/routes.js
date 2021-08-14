const { Router } = require("express")
const ArticleController = require("./controllers/Article")
const DownloadController = require("./controllers/Download")

const routes = Router()

routes.get("/articles", ArticleController.index)
routes.post("/articles", ArticleController.store)
routes.delete("/articles/:id", ArticleController.delete)
routes.get("/download", DownloadController.index)

module.exports = routes
