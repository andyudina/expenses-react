import React from 'react'
import { withRouter } from 'react-router-dom';

const UploadReceiptView = ({
    error, onSubmit,
    cleanSuccessfullyUploadedState,
    fileSuccessfullyUploaded,
    history
  }) => {
  let errorStyle = {
  	display: error? 'initial': 'none'
  }

  let file

  if (fileSuccessfullyUploaded) {
    cleanSuccessfullyUploadedState();
    history.push('/create-expenses');
  }

  return ( 
  <div>
      <div>
          <span>Upload receipt</span>
      </div>
      <div style={errorStyle}>
          <span>Error: {error}</span>
      </div>      
      <form
         onSubmit={
           e => {
             e.preventDefault();
             onSubmit(file.value)
             file.value = ''
           }
      }>
        <div>
          <span>File</span>
          <input 
             name="receipt" 
             type="file" 
             ref={node => file = node}/>
        </div>
        <div>
          <button type="submit">
            Upload
          </button>
        </div>
      </form>
  </div>
  )
}

export default withRouter(UploadReceiptView)