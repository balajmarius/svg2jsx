import 'whatwg-fetch'
import { API } from './constants'

export const getTransformedSvg = data =>
  fetch(`${API}/transform`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(res => res.json())

export const getFileContents = svg =>
  new Promise((resolve, reject) => {

    const reader = new FileReader()

    reader.onload = ({ r=reader.result }) => resolve(r)
    reader.onerror = ({ e=reader.error }) => resolve(e) 

    return reader.readAsText(svg)

  })
