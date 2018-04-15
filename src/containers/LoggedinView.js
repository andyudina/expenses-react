import { connect } from 'react-redux'
import LoggedinView from '../components/LoggedinView'

const mapStateToProps = (state, ownProps) => ({
  visible: state.user.loggedIn === true
})

export default connect(
  mapStateToProps
)(LoggedinView)