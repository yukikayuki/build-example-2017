// @flow
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'
import Counter from './containers/counter'

let store
if (process.env.NODE_ENV === 'production') { // eslint-disable-line no-undef
  store = createStore(reducers)
} else {
  const extention = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  store = createStore(reducers, extention)
}

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
)
