import { connect } from 'react-redux'
import { 
  addExpense, deleteExpense, 
  setDate, changeExpense, submitExpenses} from 'actions'
import { setReceiptIdFromUrl } from 'actions/receipt'
import CreateExpensesView from 'components/logged-in/create-expenses/CreateExpensesView'

const mapStateToProps = (state, ownProps) => ({
  date: state.receipt.expenses.date,
  parsedSuccessfully: state.receipt.parseStatus,
  expenses: state.receipt.expenses.expenses, 
  error: state.forms.createExpensesError,
  successMessage: state.forms.successfullySubmitedExpenses,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addExpense: () => dispatch(addExpense()),
  deleteExpense: (index) => dispatch(deleteExpense(index)),
  setDate: (date) => dispatch(setDate(date)),
  changeExpense: (index, name, value) => dispatch(changeExpense(index, name, value)),
  submitExpenses: (date, expenses) => dispatch(submitExpenses({date: date, expenses: expenses})),
  saveReceiptIdFromUrl: (receiptId) => dispatch(setReceiptIdFromUrl(receiptId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateExpensesView)