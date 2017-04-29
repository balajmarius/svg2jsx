import 'whatwg-fetch'

export const post = (route, data) => fetch(`${API}/${route}`, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
