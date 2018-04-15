import { connect } from 'react-redux'
import { switchToNewView } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.action === state.navigationLoggedin
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(switchToNewView(ownProps.action))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)