import 'babel-polyfill'

import hello from './hello'

hello()

const func = () => console.log('func')

const array = [1, 2, 3]
const hasOne = array.includes(1)
console.log(hasOne)
