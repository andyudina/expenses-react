import React from 'react';
import PieChart from 'components/logged-in/show-expenses/PieChart';
import ExpensesDateRange from 'components/logged-in/show-expenses/ExpensesDateRange';

const ShowExpensesView = ({dateRange, expenses, changeDateRange}) => {
  let expensiveSpendingsData = expenses.spendings.map(
    spending => ({
       'angle': spending.total_amount,
       'label': spending.name
    })
  );

  let commonSpendingsData = expenses.spendings.map(
    spending => ({
       'angle': spending.total_quantity,
       'label': spending.name
    })
  );

  return (
    <div>
      <ExpensesDateRange 
         onChange={
          (e) => changeDateRange(
            e.target.name, e.target.value)
         } 
         dateRange={dateRange} />
      <div>
        Total: {expenses.total.total_amount}
      </div>
      <PieChart 
        data={expensiveSpendingsData}
        label="Expensive" />
      <PieChart 
        data={commonSpendingsData}
        label="Common" />
    </div>
  );
}

export default ShowExpensesView;
