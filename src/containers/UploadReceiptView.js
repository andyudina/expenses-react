import { connect } from 'react-redux'
import { tryUploadFile, cleanSuccessfullyUploadedState } from 'actions'
import UploadReceiptView from 'components/UploadReceiptView'

const mapStateToProps = (state, ownProps) => {
  return {
    error: state.forms.uploadError,
    fileSuccessfullyUploaded: state.files.successfullyUploaded,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (file) => dispatch(tryUploadFile(file)),
  cleanSuccessfullyUploadedState: () => dispatch(cleanSuccessfullyUploadedState())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadReceiptView)