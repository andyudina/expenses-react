import React from 'react';
import PieChart from './PieChart';
import ExpensesDateRange from './ExpensesDateRange';

const ShowExpenses = ({visible, dateRange, expenses, changeDateRange}) => {
  let style = {
    'display': visible? 'initial': 'none'
  }

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
    <div style={style}>
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

export default ShowExpenses;
