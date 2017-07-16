// @flow
import React from 'react'

type PropType = {
  count: number,
  onClickIncrement: () => void,
  onClickDecrement: () => void,
  onClickReset: () => void,
}

const Counter = (props: PropType) => {
  return (
    <div>
      <span>{props.count}</span>
      <button onClick={props.onClickIncrement}>+</button>
      <button onClick={props.onClickDecrement}>-</button>
      <button onClick={props.onClickReset}>Reset</button>
    </div>
  )
}
export default Counter
