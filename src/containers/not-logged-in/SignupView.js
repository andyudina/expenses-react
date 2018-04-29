import { connect } from 'react-redux'
import { trySignup } from 'actions'
import SignupView from 'components/not-logged-in/SignupView'

const mapStateToProps = (state, ownProps) => ({
  errors: state.user.signupForm,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (email, password, repeatPassword) => dispatch(trySignup(email, password, repeatPassword))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupView)