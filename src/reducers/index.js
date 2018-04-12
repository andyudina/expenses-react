import { combineReducers } from 'redux'
import navigationLoggedin from './navigationLoggedin'
import navigationAnonymous from './navigationAnonymous'
import user from './user'
import forms from './forms'

export default combineReducers({
	navigationLoggedin,
	navigationAnonymous,
	user,
	forms
})