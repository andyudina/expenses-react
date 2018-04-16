import { connect } from 'react-redux'
import { trySignup } from 'actions'
import SignupView from 'components/not-logged-in/SignupView'

const mapStateToProps = (state, ownProps) => ({
  error: state.forms.signupError,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (email, password, repeate_password) => dispatch(trySignup(email, password, repeate_password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupView)