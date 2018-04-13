const svg2jsx = require('@balajmarius/svg2jsx')
const { prettyPrint } = require('html')

const transform = {
  method: 'POST',
  path: '/api/transform',
  handler: ({ payload }, reply) => 
    svg2jsx(payload)
      .then(jsx => reply({ jsx: prettyPrint(jsx) }))
      .catch(error => reply({ error }))
}

const static = {
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: '.',
      redirectToSlash: true,
      index: true
    }
  }
}

module.exports = [
  static,
  transform
]
