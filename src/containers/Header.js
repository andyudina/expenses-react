import { connect } from 'react-redux'
import Header from 'components/Header'

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.user.loggedIn,
})

export default connect(
  mapStateToProps
)(Header)