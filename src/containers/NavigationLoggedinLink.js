import { connect } from 'react-redux'
import { switchToLoginOrSignup } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.action === state.navigationLoggedin
})

export default connect(
  mapStateToProps,
)(Link)