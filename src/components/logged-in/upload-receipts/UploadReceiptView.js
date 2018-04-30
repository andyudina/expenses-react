import React from 'react'
import { withRouter } from 'react-router-dom';

const UploadReceiptView = ({
    errors,
    isUploading,
    onSubmit,
    cleanSuccessfullyUploadedState,
    fileSuccessfullyUploaded,
    history
  }) => {

  let errorStyles = {
    imageError: {
      display: errors.imageError? 'initial': 'none'
    },
    genericError: {
      display: errors.genericError? 'initial': 'none'
    }
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
      {!isUploading && <form
         onSubmit={
           e => {
             //e.preventDefault();
             onSubmit(file.files[0])
             file.value = ''
           }
      }>
        <div style={errorStyles.genericError}>
          <span>Error: {errors.genericError}</span>
        </div> 
        <div>
          <span>File</span>
          <span style={errorStyles.imageError}>
            Error: {errors.imageError}</span> 
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
      </form>}
      {isUploading && <h2>Uploading...</h2>}

  </div>
  )
}

export default withRouter(UploadReceiptView)