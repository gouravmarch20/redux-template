import counterReducer from './counter'
import togglerReducer from './toggler'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
  counter: counterReducer,
  toggler: togglerReducer
})

export default allReducers
