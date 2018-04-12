import { combineReducers } from 'redux'
import navigation from './navigation'
import user from './user'
import forms from './forms'

export default combineReducers({
	navigation,
	user,
	forms
})