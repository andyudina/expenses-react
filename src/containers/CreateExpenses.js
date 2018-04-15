import { connect } from 'react-redux'
import { 
	addExpense, deleteExpense, 
	setDate, changeExpense, submitExpenses,
	LoggedInActions } from '../actions'
import CreateExpenses from '../components/CreateExpenses'

const mapStateToProps = (state, ownProps) => ({
  visible: state.navigationLoggedin === LoggedInActions.CREATE_EXPENSES, 
  date: state.expenses.date, 
  expenses: state.expenses.expenses, 
  error: state.forms.createExpensesError,
  successMessage: state.forms.successfullySubmitedExpenses,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addExpense: () => dispatch(addExpense()),
  deleteExpense: (index) => dispatch(deleteExpense(index)),
  setDate: (date) => dispatch(setDate(date)),
  changeExpense: (index, name, value) => dispatch(changeExpense(index, name, value)),
  submitExpenses: (date, expenses) => dispatch(submitExpenses({date: date, expenses: expenses})),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateExpenses)