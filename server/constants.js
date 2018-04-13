const path = require('path')

const host = process.env.HOST
const port = process.env.PORT

const CONFIG = {
  SERVER: {
    connections: {
      routes: {
        cors: true,
        files: {
          relativeTo: path.join(__dirname, 'public')
        }
      }
    }
  },
  CONNECTION: {
    host,
    port
  }
}

module.exports = {
  CONFIG,
}
