import { connect } from 'react-redux'
import AnonymousView from '../components/AnonymousView'

const mapStateToProps = (state, ownProps) => {
  return {
      visible: state.user.loggedIn === false
  }
}

export default connect(
  mapStateToProps,
)(AnonymousView)