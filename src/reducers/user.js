import { isSignupDataValid, isLoginDataValid } from './_loginAndSignUp'

let defaultUser = {
  'loggedIn': true //false // for tests ONLY
}

const trySignUp = (email, password, repeat_password) => {
  if (isSignupDataValid(email, password, repeat_password)) {
    return {
      'loggedIn': true,
      'email': email,
    }
  }
  return
}

const tryLogIn = (email, password) => {
  if (isLoginDataValid(email, password)) {
    return {
      'loggedIn': true,
      'email': email
    }
  }
}

const user = (state = defaultUser, action) => {
  switch (action.type) {
    case 'TRY_SIGNUP':
      return trySignUp(
        action.email, action.password, action.repeat_password) || state
    case 'TRY_LOGIN':
      return tryLogIn(
        action.email, action.password) || state
    default:
      return state
  }
}

export default user