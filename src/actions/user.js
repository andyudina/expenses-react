import fetch from 'cross-fetch'
import { SERVER_URL } from 'app-constants'

export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO'
export const REQUEST_USER_INFO = 'REQUEST_USER_INFO'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const SIGNUP_FAILED = 'SIGNUP_FAILED'
export const RETRIEVE_CURRENT_USER_FAILED = 'RETRIEVE_CURRENT_USER_FAILED'
export const LOGIN_SUCCEED = 'LOGIN_SUCCEED'
export const SIGNUP_SUCCEED = 'SIGNUP_SUCCEED'
export const VERIFY_LOGIN = 'VERIFY_LOGIN'
export const VERIFY_SIGNUP = 'VERIFY_SIGNUP'

console.log(SERVER_URL)
const BASE_USER_API_URL = SERVER_URL + 'users/'


function receiveUserInfo(json) {
  // action to dispatch
  // when we got information about user
  // from remote server
  console.log(json)
  return {
    user: {
      email: json.email
    },
    type: RECEIVE_USER_INFO
  }
}

function requestUserInfo() {
  // action to dispatch
  // when we just requested user info
  return {
    type: REQUEST_USER_INFO
  }
}

function retrieveUserInfoFailed() {
  // action to dispathc
  // when we failed to get current user
  return {
    type: RETRIEVE_CURRENT_USER_FAILED
  }
}

export function getCurrentUser() {
  // Retrieve information about current user from server
  return (dispatch) => {
    dispatch(requestUserInfo())
    return fetch(BASE_USER_API_URL)
      .then(response => response.json())
      .then(json => dispatch(receiveUserInfo(json)))
      .catch(err => {
        console.log(err)
        dispatch(retrieveUserInfoFailed())
      })
  }
}

function successfullyLoggedIn() {
  return {
    type: LOGIN_SUCCEED
  }
}

function successfullySignedUp() {
  return {
    type: SIGNUP_SUCCEED
  }
}

function loginFailed(error) {
  console.log(error)
  return {
    type: LOGIN_FAILED,
    error: error
  }
}

function signupFailed(error) {
  console.log(error)
  return {
    type: SIGNUP_FAILED,
    error: error
  }
}

function login(email, password) {
  // Login user
  return (dispatch) => {
    dispatch(requestUserInfo())
    return fetch(BASE_USER_API_URL + 'login/', {
        method: 'POST',
        body: 'email=' + email + '&password=' + password
      })
      .then(response => dispatch(successfullyLoggedIn()))
      .catch(err => dispatch(loginFailed(err)))
  }
}

function signUp(email, password) {
  // Signup new user
  return (dispatch) => {
    dispatch(requestUserInfo())
    return fetch(BASE_USER_API_URL + 'signup/', {
        method: 'POST',
        body: 'email=' + email + '&password=' + password
      })
      .then(response => dispatch(successfullySignedUp()))
      .catch(err => dispatch(signupFailed(err)))
  }
}

const verifyLogin = (email, password) => ({
  type: VERIFY_LOGIN,
  email: email,
  password: password
})

const verifySignup = (email, password, repeatPassword) => ({
  type: VERIFY_SIGNUP,
  email: email,
  password: password,
  repeatPassword: repeatPassword,
})

const _canLogin = (email, password) => {
  return (email && password)
}

const _canSignUp = (email, password, repeatPassword) => {
  return (
    email && password && repeatPassword && 
    password === repeatPassword)
}

export function attemptLogin(email, password) {
  // Try login
  // Validates email and password and sends
  // request to the server
  return (dispatch) => {
    dispatch(verifyLogin())
    if (!(_canLogin(email, password))) {
      return
    }
    return login(email, password)
  }
}

export function attemptSignUp(email, password, repeatPassword) {
  // Try sign up
  // Validates input data
  // and sends request to the server
  return (dispatch) => {
    dispatch(verifySignup())
    if (!(_canSignUp(email, password, repeatPassword))) {
      return
    }
    return signUp(email, password, repeatPassword)
  }
}
