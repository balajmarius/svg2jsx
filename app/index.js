import './style/_base.scss'

import App from './container.svelte'

const target = document.querySelector('#root')
const app = new App({ target })
