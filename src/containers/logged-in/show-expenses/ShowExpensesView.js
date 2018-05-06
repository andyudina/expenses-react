import { connect } from 'react-redux'
import { attemptFetchSpendings, fetchSpendings, attemptChangeDateRange} 
  from 'actions/spendings'
import ShowExpensesView from 'components/logged-in/show-expenses/ShowExpensesView'

const mapStateToProps = (state, ownProps) => ({
  dateRange: state.spendings.dateRange,
  expenses: state.spendings.expenses,
  wasDateChanged: state.spendings.wasDateChanged,
  errors: state.spendings.spendingsForm,
  isFetching: state.spendings.isFetching,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeDateRange: (dateType, value, dateRange) => dispatch(
    attemptChangeDateRange(dateType, value, dateRange)),
  attemptFetchSpendings: (dateRange, wasDateChanged) => dispatch(
    attemptFetchSpendings(dateRange, wasDateChanged)),
  fetchSpendings: () => dispatch(fetchSpendings()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowExpensesView)