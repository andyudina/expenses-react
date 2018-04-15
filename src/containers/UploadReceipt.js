import { connect } from 'react-redux'
import { LoggedInActions, tryUploadFile } from '../actions'
import UploadReceipt from '../components/UploadReceipt'

const mapStateToProps = (state, ownProps) => {
  return {
    visible: state.navigationLoggedin === LoggedInActions.UPLOAD,
    error: state.forms.uploadError,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (file) => dispatch(tryUploadFile(file))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadReceipt)