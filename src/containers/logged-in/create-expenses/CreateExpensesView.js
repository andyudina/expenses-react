import { connect } from 'react-redux'
import { 
  addExpense, deleteExpense, 
  setDate, changeExpense, attemtCreateExpensesForBill,
  fetchExpensesForReceipt} from 'actions/expenses'
import { setReceiptIdFromUrl } from 'actions/receipt'
import CreateExpensesView from 'components/logged-in/create-expenses/CreateExpensesView'

const mapStateToProps = (state, ownProps) => ({
  date: state.expensesForReceipt.date,
  expenses: state.expensesForReceipt.expenses, 
  errors: state.expensesForReceipt.expensesForm,
  successfullyCreated: state.expensesForReceipt.successfullyCreated,
  isCreating: state.expensesForReceipt.isCreating,
  isFetching: state.expensesForReceipt.isFetching,

})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addExpense: () => dispatch(addExpense()),
  deleteExpense: (index) => dispatch(deleteExpense(index)),
  setDate: (date) => dispatch(setDate(date)),
  changeExpense: (index, name, value) => dispatch(changeExpense(index, name, value)),
  submitExpenses: (receiptId, date, expenses) => dispatch(attemtCreateExpensesForBill(
      receiptId, date, expenses)),
  fetchExpensesForReceipt: (receiptId) => dispatch(
    fetchExpensesForReceipt(receiptId)),
  saveReceiptIdFromUrl: (receiptId) => dispatch(setReceiptIdFromUrl(receiptId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateExpensesView)