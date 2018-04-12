import { connect } from 'react-redux'
import { tryLogin, LoginOrSignUpActions } from '../actions'
import Login from '../components/Login'

const mapStateToProps = (state, ownProps) => ({
  visible: state.navigation === LoginOrSignUpActions.LOGIN,
  error: state.forms.loginError,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (email, password) => dispatch(tryLogin(email, password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)