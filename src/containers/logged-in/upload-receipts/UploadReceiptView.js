import { connect } from 'react-redux'
import { attemptUploadFile, cleanSuccessfullyUploadedState } from 'actions/receipt'
import UploadReceiptView from 'components/logged-in/upload-receipts/UploadReceiptView'

const mapStateToProps = (state, ownProps) => {
  return {
    receiptId: state.receipt.id,
    errors: state.receipt.uploadFileForm,
    fileSuccessfullyUploaded: state.receipt.successfullyUploaded,
    isUploading: state.receipt.isUploading,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (file) => dispatch(attemptUploadFile(file)),
  cleanSuccessfullyUploadedState: () => dispatch(cleanSuccessfullyUploadedState())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadReceiptView)