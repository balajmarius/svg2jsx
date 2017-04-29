import './shared/style/_reset.scss'

// app
import { Container as App } from './app'

// render app
const target = document.querySelector('#root')
const app = new App({ target })
