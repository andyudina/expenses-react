import { connect } from 'react-redux'
import { attemptLogin } from 'actions/user'
import LoginView from 'components/not-logged-in/LoginView'

const mapStateToProps = (state, ownProps) => ({
  errors: state.user.loginForm,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (email, password) => dispatch(attemptLogin(email, password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView)