// @flow
import React from 'react'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
  red: {
    color: 'red',
    ':hover': {
      color: "green"
    }
  },
})

export default class Hello extends React.Component {
  props: {
    name: string
  }

  render() {
    const {name} = this.props
    const message = aisatsu(name)
    return (
      <h1 className={css(styles.red)}>
        {message}
      </h1>
    )
  }
}

function aisatsu(name: string): string {
  return `Hello, ${name} !`
}
