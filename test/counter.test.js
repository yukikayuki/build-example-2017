/* eslint-env mocha */
const assert = require('power-assert')

describe('counter', () => {
  context('every time', () => {
    it('return 0', () => {
      const counter = () => 0
      assert.equal(counter(), 0)
    })
  })
})
