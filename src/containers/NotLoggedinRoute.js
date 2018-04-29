import { connect } from 'react-redux'
import NotLoggedinRoute from 'components/NotLoggedinRoute'

const mapStateToProps = (state, ownProps) => ({
  isNotLoggedIn: (!state.user.user.isLoggedIn)
})

export default connect(
  mapStateToProps,
)(NotLoggedinRoute)