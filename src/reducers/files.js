import { isFileValid } from 'reducers/_fileUpload'
let defaultFiles = {
  'successfullyUploaded': false
}

const files = (state = defaultFiles, action) => {
  switch (action.type) {
    case 'TRY_UPLOAD_FILE':
      if (isFileValid(action.file)) {
        return {
          'successfullyUploaded': true 
        }
      }
      return {
        'successfullyUploaded': false 
      }
    case 'CLEAN_SUCCESSFULLY_UPLOADED_FILES':
      return {
        'successfullyUploaded': false
      }
    default:
      return state
  }
}

export default files