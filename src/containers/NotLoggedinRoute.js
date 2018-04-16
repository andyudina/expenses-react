import { connect } from 'react-redux'
import NotLoggedinRoute from 'components/NotLoggedinRoute'

const mapStateToProps = (state, ownProps) => ({
  isNotLoggedIn: (!state.user.loggedIn)
})

export default connect(
  mapStateToProps,
)(NotLoggedinRoute)