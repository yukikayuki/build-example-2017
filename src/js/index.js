// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import reducers from './reducers'
import Root from './root'
import {AppContainer} from 'react-hot-loader'

let store
if (process.env.NODE_ENV === 'production') { // eslint-disable-line no-undef
  store = createStore(reducers)
} else {
  const extention = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  store = createStore(reducers, extention)
}

const rootEl = document.getElementById('root')
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    rootEl
  )
}

render(Root)
if (module.hot) {
  module.hot.accept('./containers/counter', () => render(Counter))
}
