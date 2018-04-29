import { connect } from 'react-redux'
import { attemptSignUp } from 'actions/user'
import SignupView from 'components/not-logged-in/SignupView'

const mapStateToProps = (state, ownProps) => ({
  errors: state.user.signupForm,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (email, password, repeatPassword) => dispatch(attemptSignUp(email, password, repeatPassword))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupView)