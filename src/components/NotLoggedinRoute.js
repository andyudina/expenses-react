// Redirect to main page if user is authenticated
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const NotLoggedinRoute = ({ 
    isNotLoggedIn, component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={props =>
        isNotLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default NotLoggedinRoute