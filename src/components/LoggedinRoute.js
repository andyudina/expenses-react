// Redirect to login if user is not authenticated
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const LoggedinRoute = ({ 
    loggedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default LoggedinRoute