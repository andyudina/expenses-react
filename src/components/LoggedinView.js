import React from 'react'
import LoggedinHeader from './LoggedinHeader'
import UploadReceipt from '../containers/UploadReceipt'
import CreateExpenses from '../containers/CreateExpenses'
import ShowExpenses from '../containers/ShowExpenses'

const LoggedinView = (props) => {
  let style = {
    display: props.visible? 'initial': 'none'
  }
 
  return (
  <div style={style}>
    <LoggedinHeader />
    <UploadReceipt />
    <CreateExpenses />
    <ShowExpenses />
  </div>)
}

export default LoggedinView;