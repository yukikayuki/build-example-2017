// @flow
import {
  INCREMENT,
  DECREMENT,
  RESET,
} from '../actions/counter'

import type {
  IncrementActionType,
  DecrementActionType,
  ResetActionType,
} from '../actions/counter'
type CounterActionTypes = IncrementActionType | DecrementActionType | ResetActionType

export type StateType = {
  count: number
}
const initialState = {
  count: 0,
}

export default function counter(state: StateType = initialState, action: CounterActionTypes): StateType {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1,
      })
    case DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1,
      })
    case RESET:
      return initialState
    default:
      return state
  }
}
