import React from 'react'
import ExpenseDate from './ExpenseDate'
import Expense from './Expense'

const CreateExpensesView = ({
    date, 
    expenses, 
    error,
    successMessage,
    addExpense,
    deleteExpense,
    setDate,
    changeExpense,
    submitExpenses,
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

  return (
    <div>
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

export default CreateExpensesView;

