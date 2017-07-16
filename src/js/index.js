// @flow
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'
import Counter from './containers/counter'

let store = createStore(reducers)

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
)
