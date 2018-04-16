import { combineReducers } from 'redux'
import navigationLoggedin from './navigationLoggedin'
import navigationAnonymous from './navigationAnonymous'
import user from './user'
import forms from './forms'
import expenses from './expenses'
import spendings from './spendings'

export default combineReducers({
	navigationLoggedin,
	navigationAnonymous,
	user,
	forms,
	expenses,
	spendings,
})