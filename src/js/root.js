// @flow
import React from 'react'
import {Provider} from 'react-redux'
import Counter from './containers/counter'
import Second from './containers/second'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'


const Root = ({store}: {store: any}) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={Counter} />
        <Route path='/second' component={Second} />
      </div>
    </Router>
  </Provider>
)

export default Root
