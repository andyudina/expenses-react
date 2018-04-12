let defaultErrors = {
  'signupError': null,
  'loginError': null,
}


const validateSignup = (email, password, repeat_password) => {
  var error = null;
  if (!email || !password || !repeat_password) {
    error = 'All fields should be filled'
  }
  else if (password !== repeat_password) {
    error = 'Password and repeated password should match'
  }
  return {
    'signupError': error
  }
}

const validateLogin = (email, password) => {
  var error = null;
  if (!email || !password) {
    error = 'All fields should be filled'
  }
  return {
    'loginError': error
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
    default:
      return state
  }
}

export default forms