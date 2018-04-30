let defaultReceipt = {
  isUploading: false,
  successfullyUploaded: false,
  uploadFileForm: {
    imageError: false,
    genericError: false,
  },
  id: false,
  parseStatus: false,
  spendings: false
}

const verifyUploadFile = (file) => {
  if (file) {
    return {
      imageError: false,
      genericError: false
    }
  } else {
    return {
      imageError: 'File should not be empty',
      genericError: false
    }
  }
}


const files = (state = defaultReceipt, action) => {
  switch (action.type) {
    case 'VALIDATE_UPLOAD_FILE':
      return Object.assign(
        {},
        state,
        verifyUploadFile(action.file))
    case 'START_RECEIPT_UPLOAD':
      return Object.assign(
        {},
        state,
        {
          isUploading: true
        })
    case 'RECEIPT_UPLOAD_FAILED':
      return Object.assign(
        {},
        state,
        {
          isUploading: false,
          uploadFileForm: Object.assign(
            {},
            state.uploadFileForm,
            action.errors),
          successfullyUploaded: false
        })
    case 'RECEIPT_UPLOADED_BUT_NOT_PARSED':
      return Object.assign(
        {},
        state,
        {
          isUploading: false,
          successfullyUploaded: true,
          parseStatus: false,
          uploadFileForm: Object.assign(
            {}, 
            defaultReceipt.uploadFileForm),
          id: action.receiptId,
        })
    case 'RECEIPT_SUCCESSFULLY_UPLOADED':
      return Object.assign(
        {},
        state,
        {
          isUploading: false,
          successfullyUploaded: true,
          parseStatus: true,
          uploadFileForm: Object.assign(
            {}, 
            defaultReceipt.uploadFileForm),
          id: action.receiptId,
          spendings: action.spendings
        })
    case 'CLEAN_SUCCESSFULLY_UPLOADED_FILES':
      return Object.assign({}, state, {
        'successfullyUploaded': false
      })
    default:
      return state
  }
}

export default files