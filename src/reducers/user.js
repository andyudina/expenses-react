const defaultUser = {
  isFetching: true,
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

const verifySignUp = (email, password, repeatPassword) => {
  let mandatoryParams = {
    email: email,
    password: password,
    repeatPassword: repeatPassword
  }
  let errors = {}
  for (var param in mandatoryParams) {
    if (!(mandatoryParams[param])) {
      errors[param + 'Error'] = 'Please fill in this field'
    } else {
      errors[param + 'Error'] = false
    }
  }
  if (password && repeatPassword && password !== repeatPassword) {
    errors['repeatPasswordError'] = 'Passwords should match'
  }
  return {
    signupForm: Object.assign(
      errors, {genericError: false})
  }
}

// TODO: refactor copy paste
const verifyLogIn = (email, password) => {
  let mandatoryParams = {
    email: email,
    password: password,
  }
  let errors = {}
  for (var param in mandatoryParams) {
    if (!(mandatoryParams[param])) {
      errors[param + 'Error'] = 'Please fill in this field'
    } else {
      errors[param + 'Error'] = false
    }
  }
  return {
    loginForm: Object.assign(
      errors, {genericError: false})
  }
}

const user = (state = defaultUser, action) => {
  switch (action.type) {
    case 'VERIFY_SIGNUP':
      return Object.assign(
        {},
        state,
        verifySignUp(
          action.email, action.password, 
          action.repeatPassword))
    case 'VERIFY_LOGIN':
      return Object.assign(
        {},
        state,
        verifyLogIn(
          action.email, action.password))
    case 'RECEIVE_USER_INFO':
      return Object.assign(
        {},
        state,
        {
          isFetching: false,
          user: {
            isLoggedIn: true
          }
        })
    case 'REQUEST_USER_INFO':
      return Object.assign(
        {},
        state,
        {
          isFetching: true,
        })
    case 'LOGIN_FAILED':
      return Object.assign(
        {},
        state,
        {
          isFetching: false,
          loginForm: Object.assign(
            {},
            state.loginForm,
            {
              genericError: action.error
            }),
          user: {
            isLoggedIn: false
          }
        })

    case 'SIGNUP_FAILED':
      return Object.assign(
        {},
        state,
        {
          isFetching: false,
          signupForm: Object.assign(
            {},
            state.signupForm,
            {
              genericError: action.error
            }),
          user: {
            isLoggedIn: false
          }
        })

    case 'RETRIEVE_CURRENT_USER_FAILED':
      return Object.assign(
        {},
        state,
        {
          isFetching: false,
          user: {
            isLoggedIn: false
          }
        })

    case 'LOGIN_SUCCEED':
      return Object.assign(
        {},
        state,
        {
          isFetching: false,
          loginForm: Object.assign(
            {},
            defaultUser.loginForm),
          user: {
            isLoggedIn: true
          }
        })

    case 'SIGNUP_SUCCEED':
      return Object.assign(
        {},
        state,
        {
          isFetching: false,
          signupnForm: Object.assign(
            {},
            defaultUser.signupForm),
          user: {
            isLoggedIn: true
          }
        })

    default:
      return state
  }
}

export default user