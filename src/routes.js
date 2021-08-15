const { Router } = require("express")
const ArticleController = require("./controllers/Article")
const DownloadController = require("./controllers/Download")

const routes = Router()

routes.post("/articles", ArticleController.store)
routes.get("/download", DownloadController.index)

module.exports = routes
