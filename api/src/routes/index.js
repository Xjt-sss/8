const { Router } = require("express")
const usrsRoutes = require('./user.routes')
const routes = Router()
routes.use("/users", usrsRoutes)
module.exports = routes