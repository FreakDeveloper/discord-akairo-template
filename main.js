const Core = require("./client/client.js")
const client = new Core()
const { token } = require("./config.json")
client.start(token)