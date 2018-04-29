import { connect } from 'react-redux'
import App from 'components/App'

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.user.isFetching,
})

export default connect(
  mapStateToProps
)(App)