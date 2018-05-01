import React from 'react'
import { withRouter } from 'react-router-dom';
import ExpenseDate from 'components/logged-in/create-expenses/ExpenseDate'
import Expense from 'components/logged-in/create-expenses/Expense'

const CreateExpensesView = ({
    date, 
    expenses,
    history,
    parsedSuccessfully,
    error,
    successMessage,
    addExpense,
    deleteExpense,
    setDate,
    changeExpense,
    submitExpenses,
    saveReceiptIdFromUrl,
    match,
  }) => {
  let errorStyle = {
    'display': error? 'initial': 'none'
  }

  let successMessageStyle = {
    'display': successMessage? 'initial': 'none'
  }

  let handleDateChange = (event) => {
    setDate(event.target.value);
  }

  saveReceiptIdFromUrl(match.params.receiptId)

  return (
    <div>
      {parsedSuccessfully &&
        <div>
        We manage to parse the receipt.
        Please check if everything is correct
        </div>
      }
      {!parsedSuccessfully &&
        <div>
        We failed to parse the receipt.
        Please fill in expenses and select date
        </div>
      }
      <div style={errorStyle}>
        Error: {error}
      </div>
      <div style={successMessageStyle}>
        {successMessage}
      </div>
      <ExpenseDate 
         onChange={handleDateChange} 
         date={date}/>
      <div>
        <ul>
       {expenses.map((expense, index) =>
          <Expense
           onDelete={
            () => {
                deleteExpense(index)
           }}
           onChange={
            (e) => {
              changeExpense(
              index, e.target.name, e.target.value)
           }}
           key={index}
           {...expense}
          />
        )}
        </ul>
      </div>
      <div>
        <button onClick={addExpense}>
          Add expense
        </button>
      </div>
      <div>
        <button onClick={() => submitExpenses(date, expenses)}>
          Submit
        </button>
      </div>
    </div>)
}

export default withRouter(CreateExpensesView);

