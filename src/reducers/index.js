import { combineReducers } from 'redux'
import user from 'reducers/user'
import forms from 'reducers/forms'
import spendings from 'reducers/spendings'
import receipt from 'reducers/receipt'

export default combineReducers({
  user,
  forms,
  spendings,
  receipt,
})