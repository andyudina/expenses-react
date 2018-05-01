import { combineReducers } from 'redux'
import user from 'reducers/user'
import spendings from 'reducers/spendings'
import receipt from 'reducers/receipt'

export default combineReducers({
  user,
  spendings,
  receipt,
})