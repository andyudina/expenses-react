import fetch from 'cross-fetch'
import { SERVER_URL } from 'app-constants'
import { _getErrors } from 'actions/_utils'


export const VALIDATE_UPLOAD_FILE = 'VALIDATE_UPLOAD_FILE'
export const START_RECEIPT_UPLOAD= 'START_RECEIPT_UPLOAD'
export const RECEIPT_UPLOAD_FAILED = 'RECEIPT_UPLOAD_FAILED'
export const RECEIPT_SUCCESSFULLY_UPLOADED = 'RECEIPT_SUCCESSFULLY_UPLOADED'
export const CLEAN_SUCCESSFULLY_UPLOADED_FILES = 
  'CLEAN_SUCCESSFULLY_UPLOADED_FILES'
export const SET_RECEIPT_ID_FROM_URL = 'SET_RECEIPT_ID_FROM_URL'

const BASE_RECEIPT_API_URL = SERVER_URL + 'bills/'


const receiptUploadFailed = (errors) => ({
  type: RECEIPT_UPLOAD_FAILED,
  errors: errors
})

const successfullyUploadedReceipt = (receiptId, spendings) => ({
  type: RECEIPT_SUCCESSFULLY_UPLOADED,
  receiptId: receiptId,
  spendings: spendings
})

const startReceiptUpload = () => ({
  type: START_RECEIPT_UPLOAD
})

function uploadFile(file) {
  return (dispatch) => {
    dispatch(startReceiptUpload())
    const form = new FormData();
    form.append('image', file);

    fetch(BASE_RECEIPT_API_URL, {
      method: 'POST',
      body: form,
      credentials: 'include',
    })
    .then(
      response => {
        console.log(response)
        if (response.status > 400) {
          // unknown error occured
          throw new Error('Unknown error. Please contact the support')
        } else if (response.status === 400) {
          // server send valid error
          response.json()
            .then(json => dispatch(receiptUploadFailed(_getErrors(json))))
        } else {
          response.json()
            .then(json => dispatch(
                successfullyUploadedReceipt(
                  json.bill, json.parsed_spendings)))
        }
      })
      .catch(err => {
        dispatch(receiptUploadFailed({genericError: err.message}))
      })
  }
}

const validateFileUpload = (file) => ({
  type: VALIDATE_UPLOAD_FILE,
  file: file,
})

const _isValidFile = (file) => (!!(file))

export function attemptUploadFile(file) {
  // try upload file to the server
  return (dispatch) => {
    dispatch(validateFileUpload(file))
    if (!(_isValidFile(file))) {
      return
    }
    dispatch(uploadFile(file))
  }
}

export const cleanSuccessfullyUploadedState = () => ({
  type: CLEAN_SUCCESSFULLY_UPLOADED_FILES
})

export const setReceiptIdFromUrl = (receiptId) => ({
  type: SET_RECEIPT_ID_FROM_URL,
  receiptId: receiptId
})

