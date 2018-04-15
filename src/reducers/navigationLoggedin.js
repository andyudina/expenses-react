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
    default:
      return state
  }
}

export default navigationLoggedin