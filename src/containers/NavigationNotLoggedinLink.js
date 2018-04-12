import { connect } from 'react-redux'
import { switchToLoginOrSignup } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.action === state.navigationAnonymous
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(switchToLoginOrSignup(ownProps.action))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)