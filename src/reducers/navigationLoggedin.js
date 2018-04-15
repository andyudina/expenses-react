import { isFileValid } from './_fileUpload'

const navigationLoggedin = (
	state = 'CREATE_EXPENSES', //'UPLOAD', for tests only 
	action) => {
  switch (action.type) {
  	case 'TRY_UPLOAD_FILE':
  	  if (isFileValid(action.file)) {
  	  	return 'CREATE_EXPENSES'
  	  }
  	  return state
  	case 'SWITCH_TO_NEW_VIEW':
  	  return action.action
    default:
      return state
  }
}

export default navigationLoggedin