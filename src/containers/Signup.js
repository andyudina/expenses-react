import { connect } from 'react-redux'
import { trySignup, LoginOrSignUpActions } from '../actions'
import Signup from '../components/Signup'

const mapStateToProps = (state, ownProps) => ({
  visible: state.navigation === LoginOrSignUpActions.SIGNUP,
  error: state.forms.signupError,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (email, password, repeate_password) => dispatch(trySignup(email, password, repeate_password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)