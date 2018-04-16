import { combineReducers } from 'redux'
import user from 'reducers/user'
import forms from 'reducers/forms'
import expenses from 'reducers/expenses'
import spendings from 'reducers/spendings'
import files from 'reducers/files'

export default combineReducers({
  user,
  forms,
  expenses,
  spendings,
  files
})