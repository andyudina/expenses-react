let defaultUser = {
  isFetching: false,
  loginForm: {
    emailError: false,
    passwordError: false,
    genericError: false,
  },
  signupForm: {
    emailError: false,
    passwordError: false,
    repeatPasswordError: false,
    genericError: false,
  },
  user: {
    isLoggedIn: false,
  },
}

const trySignUp = (email, password, repeatPassword) => {
  let mandatoryParams = {
    email: email,
    password: password,
    repeatPassword: repeatPassword
  }
  let errors = {}
  for (var param in mandatoryParams) {
    if (!(mandatoryParams[param])) {
      errors[param + 'Error'] = 'Please fill in this field'
    }
  }
  if (password && repeatPassword && password !== repeatPassword) {
    errors['repeatPasswordError'] = 'Passwords should match'
  }
  let result = {}
  // login if no errors returned
  if (Object.keys(errors).length === 0) {
    result['user'] = {
      'isLoggedIn': true
    }
  } else {
    result['user'] = {
      'isLoggedIn': false
    }
    result['signupForm'] = Object.assign(
      errors, {genericError: false})
  }
  return result
}

// TODO: refactor copy paste
const tryLogIn = (email, password) => {
  let mandatoryParams = {
    email: email,
    password: password,
  }
  let errors = {}
  for (var param in mandatoryParams) {
    if (!(mandatoryParams[param])) {
      errors[param + 'Error'] = 'Please fill in this field'
    }
  }
  let result = {}
  // login if no errors returned
  if (Object.keys(errors).length === 0) {
    result['user'] = {
      'isLoggedIn': true
    }
  } else {
    result['user'] = {
      'isLoggedIn': false
    }
    result['loginForm'] = Object.assign(
      errors, {genericError: false})
  }
  return result
}

const user = (state = defaultUser, action) => {
  switch (action.type) {
    case 'TRY_SIGNUP':
      return Object.assign(
        {},
        state,
        trySignUp(
          action.email, action.password, 
          action.repeatPassword))
    case 'TRY_LOGIN':
      return Object.assign(
        {},
        state,
        tryLogIn(
          action.email, action.password))
    default:
      return state
  }
}

export default user