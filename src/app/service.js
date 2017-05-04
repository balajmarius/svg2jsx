import * as API from '../shared/service'

export const getTransformedSvg = data => API.post('transform', data)

export const getFileContents = svgFile => new Promise((resolve, reject) => {

  const reader = new FileReader()

  function handleLoad() {
    resolve(this.result)
  }

  function handleError() {
    reject(this.error)
  }

  reader.onload = handleLoad
  reader.onerror = handleError

  reader.readAsText(svgFile)

})
