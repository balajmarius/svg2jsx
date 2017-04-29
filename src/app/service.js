import * as API from '../shared/service'

export const getTransformedSVG = data => API.post('transform', data)
