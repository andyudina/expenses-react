import React from 'react'

const UploadReceipt = (props) => {
  let style = {
    display: props.visible? 'initial': 'none'
  }

  let errorStyle = {
  	display: props.error? 'initial': 'none'
  }

  let file

  return (
  
  <div style={style}>
      <div>
          <span>Upload receipt</span>
      </div>
      <div style={errorStyle}>
          <span>Error: {props.error}</span>
      </div>      
      <form
         onSubmit={
           e => {
             e.preventDefault();
             props.onSubmit(file.value)
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

export default UploadReceipt