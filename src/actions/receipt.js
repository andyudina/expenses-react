import fetch from 'cross-fetch'
import { SERVER_URL } from 'app-constants'
import { _getErrors } from 'actions/_utils'


export const VALIDATE_UPLOAD_FILE = 'VALIDATE_UPLOAD_FILE'
export const START_RECEIPT_UPLOAD= 'START_RECEIPT_UPLOAD'
export const RECEIPT_UPLOAD_FAILED = 'RECEIPT_UPLOAD_FAILED'
export const RECEIPT_UPLOADED_BUT_NOT_PARSED = 
  'RECEIPT_UPLOADED_BUT_NOT_PARSED'
export const RECEIPT_SUCCESSFULLY_UPLOADED = 'RECEIPT_SUCCESSFULLY_UPLOADED'
export const CLEAN_SUCCESSFULLY_UPLOADED_FILES = 
  'CLEAN_SUCCESSFULLY_UPLOADED_FILES'

const BASE_RECEIPT_API_URL = SERVER_URL + 'bills/'


const receiptUploadFailed = (errors) => ({
  type: RECEIPT_UPLOAD_FAILED,
  errors: errors
})

const receiptUploadedButParsingFailed = (receiptId) => ({
  type: RECEIPT_UPLOADED_BUT_NOT_PARSED,
  receiptId: receiptId
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
        if (response.status > 400 && response.status !== 406) {
          // unknown error occured
          throw new Error('Unknown error. Please contact the support')
        } else if (response.status === 400) {
          // server send valid error
          response.json()
            .then(json => dispatch(receiptUploadFailed(_getErrors(json))))
        } else if (response.status === 406) {
          // receipt uploaded but parsing failed
          response.json()
            .then(json => dispatch(
                receiptUploadedButParsingFailed(json.bill_id)))
        } else {
          response.json()
            .then(json => dispatch(
                successfullyUploadedReceipt(
                  json.bill_id, json.parsed_spendings)))
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

