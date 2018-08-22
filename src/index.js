import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'rebass'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { injectGlobal } from 'styled-components'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
@font-face {
  font-family: 'Roboto Mono', monospace;
  }
body {
  font-family: 'Roboto Mono', monospace;
  margin: 0;
  box-sizing: border-box;
  height: 100%;
}
html {
  height: 100%;
}
`

const colors = [
  [{ main: 'rgb(155, 243, 195)', secondary: '#d3d3d3' }],
  [{ main: '#a33a31', secondary: '#03c3c7' }],
  [{ main: '#aa2d4d', secondary: '#54caae' }],
  [{ main: '#831a4a', secondary: '#7cf0b8' }]
]

const theme = {
  main: 'rgb(155, 243, 195)',
  // secondary: '#d3d3d3;',
  // secondary: 'rgba(0, 0, 0, .7)',
  font: 'Roboto mono',
  radius: '2px'
  // main: colors[0].main,
  // secondary: colors[0].secondary
}
ReactDOM.render(
  <Provider theme={theme}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
