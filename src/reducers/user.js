let defaultUser = {
  'loggedIn': false
}

const trySignUp = (email, password, repeat_password) => {
  if (!email || !password || !repeat_password) {
    return
  }
  if (repeat_password !== password) {
    return
  }
  return {
    'loggedIn': true,
    'email': email,
  }
}

const tryLogIn = (email, password) => {
  if (!email || !password) {
    return
  }
  return {
    'loggedIn': true,
    'email': email
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