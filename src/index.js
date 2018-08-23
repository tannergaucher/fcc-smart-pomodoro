import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'rebass'
import App from './App'
import Settings from './Settings'
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html {
  height: 100%;
}
`

// const colors = [
//   [{ main: 'rgb(155, 243, 195)', secondary: '#d3d3d3' }],
//   [{ main: '#a33a31', secondary: '#03c3c7' }],
//   [{ main: '#aa2d4d', secondary: '#54caae' }],
//   [{ main: '#831a4a', secondary: '#7cf0b8' }]
// ]
const theme = {
  main: 'rgb(155, 243, 195)',
  secondary: 'rgba(0, 0, 0, .9)',
  contrast: 'pink',
  font: 'Roboto mono',
  radius: '2px'
}

ReactDOM.render(
  <Provider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/settings" component={Settings} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
