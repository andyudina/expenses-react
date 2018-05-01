import { connect } from 'react-redux'
import { 
  addExpense, deleteExpense, 
  setDate, changeExpense, attemtCreateExpensesForBill} from 'actions/expenses'
import { setReceiptIdFromUrl } from 'actions/receipt'
import CreateExpensesView from 'components/logged-in/create-expenses/CreateExpensesView'

const mapStateToProps = (state, ownProps) => ({
  date: state.receipt.expenses.date,
  parsedSuccessfully: state.receipt.parseStatus,
  expenses: state.receipt.expenses.expenses, 
  errors: state.receipt.expenses.expensesForm,
  successfullyCreated: state.receipt.expenses.successfullyCreated,
  isCreating: state.receipt.expenses.isCreating,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addExpense: () => dispatch(addExpense()),
  deleteExpense: (index) => dispatch(deleteExpense(index)),
  setDate: (date) => dispatch(setDate(date)),
  changeExpense: (index, name, value) => dispatch(changeExpense(index, name, value)),
  submitExpenses: (receiptId, date, expenses) => dispatch(attemtCreateExpensesForBill(
      receiptId, date, expenses)),
  saveReceiptIdFromUrl: (receiptId) => dispatch(setReceiptIdFromUrl(receiptId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateExpensesView)