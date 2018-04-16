import { connect } from 'react-redux'
import { changeDateRange } from '../actions'
import ShowExpensesView from '../components/ShowExpensesView'

const mapStateToProps = (state, ownProps) => ({
  dateRange: state.spendings.dateRange,
  expenses: state.spendings.expenses,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeDateRange: (dateType, value) => dispatch(changeDateRange(dateType, value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowExpensesView)