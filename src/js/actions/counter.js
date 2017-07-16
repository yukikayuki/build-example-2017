// @flow
import type {FluxStandardAction} from './types'

export const INCREMENT = 'INCREMENT'
export type IncrementActionType = {
  type: 'INCREMENT'
}
export function increment(): FluxStandardAction {
  return {
    type: INCREMENT
  }
}

export const DECREMENT = 'DECREMENT'
export type DecrementActionType = {
  type: 'DECREMENT'
}
export function decrement(): FluxStandardAction {
  return {
    type: DECREMENT
  }
}

export const RESET = 'RESET'
export type ResetActionType = {
  type: 'RESET'
}
export function reset(): FluxStandardAction {
  return {
    type: RESET
  }
}
