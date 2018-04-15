import { 
  isSignupDataComplete, 
  isSignupPasswordMatch, 
  isLoginDataValid } from './_loginAndSignUp'
import { isFileValid } from './_fileUpload'
import { isExpensesDateValid, areItemsValid } from './_expenses'

let defaultErrors = {
  'signupError': null,
  'loginError': null,
  'fileUploadError': null,
  'createExpensesError': null,
  'successfullySubmitedExpenses': null
}

const validateSignup = (email, password, repeat_password) => {
  var error = null;
  if (!isSignupDataComplete(email, password, repeat_password)) {
    error = 'All fields should be filled'
  }
  else if (!isSignupPasswordMatch(password, repeat_password)) {
    error = 'Password and repeated password should match'
  }
  return {
    'signupError': error
  }
}

const validateLogin = (email, password) => {
  var error = null;
  if (!isLoginDataValid(email, password)) {
    error = 'All fields should be filled'
  }
  return {
    'loginError': error
  }
}

const validateFileUpload = (file) => {
  var error = null;
  if (!isFileValid(file)) {
    error = 'Please select a file'
  }
  return {
    'fileUploadError': error
  }

}

const validateExpenses = (expenses) => {
  var error = null;
  var message = null;
  if (!(isExpensesDateValid(expenses.date))) {
    error = 'Please fill in the date'
  } else if (!(areItemsValid(expenses.expenses))) {
    error = 'All expenses should be filled in'
  }
  if (!error) {
    message = 'Successfully submited'
  }
  return {
    'createExpensesError': error,
    'successfullySubmitedExpenses': message
  }
}

const forms = (state = defaultErrors, action) => {
  switch (action.type) {
    case 'TRY_SIGNUP':
      return Object.assign({}, state, validateSignup(
        action.email, action.password, action.repeat_password))
    case 'TRY_LOGIN':
      return Object.assign({}, state, validateLogin(
        action.email, action.password))
    case 'TRY_UPLOAD_FILE':
      return Object.assign(
        {}, state, 
        validateFileUpload(action.file))
    case 'SUBMIT_EXPENSES':
      return Object.assign(
        {}, state, 
        validateExpenses(action.expenses))    
    default:
      return state
  }
}

export default forms