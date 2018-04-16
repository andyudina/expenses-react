import { connect } from 'react-redux'
import { changeDateRange, LoggedInActions } from '../actions'
import ShowExpenses from '../components/ShowExpenses'

const mapStateToProps = (state, ownProps) => ({
  visible: state.navigationLoggedin === LoggedInActions.SHOW_EXPENSES,
  dateRange: state.spendings.dateRange,
  expenses: state.spendings.expenses,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeDateRange: (dateType, value) => dispatch(changeDateRange(dateType, value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowExpenses)