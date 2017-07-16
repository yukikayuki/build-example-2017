import React from 'react'

const Counter = (props) => {
  return (
    <div>
      <span>{props.counter.count}</span>
      <button onClick={props.onClickIncrement}>+</button>
      <button onClick={props.onClickDecrement}>-</button>
      <button onClick={props.onClickReset}>Reset</button>
    </div>
  )
}
export default Counter
