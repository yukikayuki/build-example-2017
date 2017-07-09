// @flow
import React from 'react'

export default class Hello extends React.Component {
  props: {
    name: string
  }

  render() {
    const {name} = this.props
    const message = aisatsu(name)
    return <h1>{message}</h1>
  }
}

function aisatsu(name: string): string {
  return `Hello, ${name} !`
}
