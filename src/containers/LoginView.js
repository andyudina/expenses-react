import { connect } from 'react-redux'
import { tryLogin } from '../actions'
import LoginView from '../components/LoginView'

const mapStateToProps = (state, ownProps) => ({
  error: state.forms.loginError,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (email, password) => dispatch(tryLogin(email, password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView)