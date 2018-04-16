import React from 'react'
import Link from 'components/Link'

const Header = ({loggedIn}) => {
  let loggedInStyles = {
    'display': loggedIn? 'initial': 'none'
  }

  let notLoggedInStyles = {
    'display': loggedIn? 'none': 'initial'
  }
  return (
    <div>
       <div style={loggedInStyles}>
         <Link to="/">Upload receipt</Link>
         <Link to="/show-expenses">Show expenses</Link>
       </div>
       <div style={notLoggedInStyles}>
         <Link to="/login">Login</Link>
         <Link to="/signup">Sign up</Link>
       </div>
    </div>
  )
}

export default Header