// @flow

import React from 'react'
import {connect} from 'react-redux'
import Counter from '../components/counter'
import * as CounterActions from '../actions/counter'

import {NavLink} from 'react-router-dom'

// types
import type {FluxStandardAction} from '../actions/types'
import type {StateType as CounterType} from '../reducers/counter'
type PropType = {
  dispatch: (FluxStandardAction) => void,
  counter: CounterType
}

class App extends React.Component {
  props: PropType

  render() {
    const {counter, dispatch} = this.props

    const _counter = {...counter}
    console.log(_counter)

    return (
      <div>
        <Counter
          count={counter.count}
          onClickIncrement={() => dispatch(CounterActions.increment())}
          onClickDecrement={() => dispatch(CounterActions.decrement())}
          onClickReset={() => dispatch(CounterActions.reset())}
        />
        <NavLink to='/second'>Second</NavLink>
      </div>
    )
  }
}

const mapStateToProps = (state: PropType) => {
  return {
    counter: state.counter,
  }
}

export default connect(mapStateToProps)(App)
