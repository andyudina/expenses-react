import React from 'react'
import AnonymousHeader from './AnonymousHeader'
import Login from '../containers/Login'
import Signup from '../containers/Signup'

const AnonymousView = (props) => {
  let style = {
    display: props.visible? 'initial': 'none'
  }
 
  return (
  <div style={style}>
    <AnonymousHeader />
    <Login />
    <Signup />
  </div>)
}

export default AnonymousView;