// Login/SignUp view actions

export const switchToLoginOrSignup = (action) => ({
  type: 'SWITCH_TO_LOGIN_OR_SIGNUP',
  action: action
})

export const tryLogin = (email, password) => ({
  type: 'TRY_LOGIN',
  email: email,
  password: password
})

export const trySignup = (email, password, repeat_password) => ({
  type: 'TRY_SIGNUP',
  email: email,
  password: password,
  repeat_password: repeat_password,
})

export const DEFAULT_NAVIGATION = 'DEAFULT'

export const LoginOrSignUpActions = {
  LOGIN: 'LOGIN',
  SIGNUP: 'SIGNUP'
}

