import React from 'react'
import NavigationNotLoggedinLink from '../containers/NavigationNotLoggedinLink'
import { LoginOrSignUpActions } from '../actions'

const AnonymousHeader = () => (
    <div>
       <NavigationNotLoggedinLink action={LoginOrSignUpActions.LOGIN}>Login</NavigationNotLoggedinLink>
       <NavigationNotLoggedinLink action={LoginOrSignUpActions.SIGNUP}>Sign up</NavigationNotLoggedinLink>
    </div>
)

export default AnonymousHeader