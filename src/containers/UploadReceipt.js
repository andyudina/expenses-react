import { connect } from 'react-redux'
import { LoggedInActions } from '../actions'
import UploadReceipt from '../components/UploadReceipt'

const mapStateToProps = (state, ownProps) => {
  return {
    visible: state.navigationLoggedin === LoggedInActions.UPLOAD,
    error: state.forms.uploadError,
  }
}

export default connect(
  mapStateToProps
)(UploadReceipt)