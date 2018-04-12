import React from 'react'
import LoggedinHeader from './LoggedinHeader'
import UploadReceipt from '../containers/UploadReceipt'

const LoggedinView = (props) => {
  let style = {
    display: props.visible? 'initial': 'none'
  }
 
  return (
  <div style={style}>
    <LoggedinHeader />
    <UploadReceipt />
  </div>)
}

export default LoggedinView;