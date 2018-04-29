import { connect } from 'react-redux'
import LoggedinRoute from 'components/LoggedinRoute'

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.user.user.isLoggedIn,
})

export default connect(
  mapStateToProps,
)(LoggedinRoute)