import React from 'react'
import { withRouter } from 'react-router-dom';
import ExpenseDate from 'components/logged-in/create-expenses/ExpenseDate'
import Expense from 'components/logged-in/create-expenses/Expense'

const CreateExpensesView = ({
    date, 
    expenses,
    history,
    parsedSuccessfully,
    errors,
    successfullyCreated,
    isCreating,
    addExpense,
    deleteExpense,
    setDate,
    changeExpense,
    submitExpenses,
    saveReceiptIdFromUrl,
    match,
  }) => {

  let handleDateChange = (event) => {
    setDate(event.target.value);
  }

  return (
    <div>
      {!isCreating &&
        <div>
          {parsedSuccessfully &&
          <div>
            We manage to parse the receipt.
            Please check if everything is correct
          </div>}
      
          {!parsedSuccessfully &&
          <div>
            We failed to parse the receipt.
            Please fill in expenses and select date
          </div>}
      
          {errors.genericError && 
          <span>
            {errors.genericError}
          </span>}

          {successfullyCreated &&
          <span>
            Successfully created
          </span>}

          <ExpenseDate
            error={errors.dateError}
            onChange={handleDateChange} 
            date={date}/>
          <div>

            <ul>
              {expenses.map((expense, index) =>
              <Expense
                errors={(errors.itemsErrors[index] || {})}
                onDelete={
                  () => {
                    deleteExpense(index)
                  }
                }
                onChange={
                  (e) => {
                    changeExpense(
                    index, e.target.name, e.target.value)
                  }
                }
                key={index}
                {...expense}
              />)}
            </ul>
          </div>
          <button onClick={addExpense}>
            Add expense
          </button>
          <button onClick={() => submitExpenses(
            match.params.receiptId, date, expenses)}>
            Submit
          </button>
        </div>}
    {isCreating && <h2>Creating...</h2>}
    </div>)
}

export default withRouter(CreateExpensesView);

