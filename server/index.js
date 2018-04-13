const Hapi = require('hapi')
const Inert = require('inert')
const chalk = require('chalk')
const noop = require('no-op')

// constants
const { CONFIG } = require('./constants')
const routes = require('./routes')

// create server
const server = new Hapi.Server(CONFIG.SERVER)

server.connection(CONFIG.CONNECTION)
server.register(Inert, noop)

// routes
server.route(routes)

// start 🏃
server.start(error => {

  if (error) throw error

  console.log('\n💻  Server running at:')
  console.log(`${chalk.magenta(server.info.uri)}\n`)

})
