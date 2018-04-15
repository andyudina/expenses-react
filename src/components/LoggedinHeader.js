import React from 'react'
import NavigationLoggedinLink from '../containers/NavigationLoggedinLink.js'
import { LoggedInActions } from '../actions'

const LoggedinHeader = () => (
  <div>
    <NavigationLoggedinLink action={LoggedInActions.UPLOAD}>
      Upload Receipt
    </NavigationLoggedinLink>
  </div>
)

export default LoggedinHeader