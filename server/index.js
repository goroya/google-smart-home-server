import express from "express"
import { Nuxt, Builder } from "nuxt"
import Debug from "debug"
const debug = Debug("express-debug")

import api from "./api"

const app = express()
const host = process.env.HOST || "127.0.0.1"
const port = process.env.PORT || 3000

app.set("port", port)

app.use("/api", api)

let config = require("../nuxt.config.js")
config.dev = !(process.env.NODE_ENV === "production")

const nuxt = new Nuxt(config)

if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

app.use(nuxt.render)
app.listen(port, host)
app.on("error", onError)
app.on("listening", onListening)
console.log("Server listening on " + host + ":" + port)

function onError(error) {
  if (error.syscall !== "listen") {
    throw error
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges")
      process.exit(1)
      break
    case "EADDRINUSE":
      console.error(bind + " is already in use")
      process.exit(1)
      break
    default:
      throw error
  }
}

function onListening() {
  const addr = app.address()
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port
  debug("Listening on " + bind)
}
