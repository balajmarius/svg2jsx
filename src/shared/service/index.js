import 'whatwg-fetch'
import { API } from '../constants'

export const post = (route, data) => fetch(`${API}/${route}`, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
