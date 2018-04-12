import React from 'react'
import LoginOrSignUpLink from '../containers/LoginOrSignUpLink.js'
import Login from '../containers/Login.js'
import Signup from '../containers/Signup.js'
import { LoginOrSignUpActions } from '../actions'

const LoginSignupView = () => (
  <div>
    <div>
       <LoginOrSignUpLink action={LoginOrSignUpActions.LOGIN}>Login</LoginOrSignUpLink>
       <LoginOrSignUpLink action={LoginOrSignUpActions.SIGNUP}>Sign up</LoginOrSignUpLink>
    </div>
    <Login />
    <Signup />
  </div>
)

export default LoginSignupView;