// @flow

import React from 'react'

import {NavLink} from 'react-router-dom'

export default class Second extends React.Component {
  render() {
    return (
      <div>
        <div>Second page</div>
        <NavLink to='/'>Root</NavLink>
      </div>
    )
  }
}
