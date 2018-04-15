import React from 'react'
import LoggedinHeader from './LoggedinHeader'
import UploadReceipt from '../containers/UploadReceipt'
import CreateExpenses from '../containers/CreateExpenses'

const LoggedinView = (props) => {
  let style = {
    display: props.visible? 'initial': 'none'
  }
 
  return (
  <div style={style}>
    <LoggedinHeader />
    <UploadReceipt />
    <CreateExpenses />
  </div>)
}

export default LoggedinView;