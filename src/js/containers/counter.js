import {connect} from 'react-redux'
import * as CounterActions from '../actions/counter'
import Counter from '../components/counter'

const mapStateToProps = state => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickIncrement: () => dispatch(CounterActions.increment()),
    onClickDecrement: () => dispatch(CounterActions.decrement()),
    onClickReset: () => dispatch(CounterActions.reset()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
