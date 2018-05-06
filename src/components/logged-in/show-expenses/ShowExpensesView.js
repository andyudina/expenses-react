import React, { Component } from 'react';
import PieChart from 'components/logged-in/show-expenses/PieChart';
import ExpensesDateRange from 'components/logged-in/show-expenses/ExpensesDateRange';

class ShowExpensesView extends Component {

  componentDidMount() {
    this.props.fetchSpendings();
  }

  render() {
    let areAnySpendingsFound = this.props.expenses.spendings.length !== 0
    let expensiveSpendingsData = this.props.expenses.spendings.map(
      spending => ({
        'angle': spending.total_amount,
        'label': spending.name
      })
    );

    let commonSpendingsData = this.props.expenses.spendings.map(
      spending => ({
        'angle': spending.total_quantity,
        'label': spending.name
     })
    );

    return (
    <div>
    {!this.props.isFetching &&
      <div>
      <ExpensesDateRange 
         onChange={
          (e) => this.props.changeDateRange(
            e.target.name, e.target.value, this.props.dateRange)
         }
         onBlur={
          (e) => this.props.attemptFetchSpendings(
            this.props.dateRange, this.props.wasDateChanged)
         }
         dateRange={this.props.dateRange} />
      {this.props.errors.genericError && <div>
        {this.props.errors.genericError}
      </div>}
    
      {areAnySpendingsFound && <div>
        <div>
          Total: {this.props.expenses.total.total_amount}
        </div>
        <PieChart 
          data={expensiveSpendingsData}
          label="Expensive" />
        <PieChart 
          data={commonSpendingsData}
          label="Common" />
      </div>}

      {!areAnySpendingsFound && <h2>No spendings found in the time range</h2>}
    </div>} 
    {this.props.isFetching && <h2>Fetching... </h2>}
    </div>
    );
  }
}

export default ShowExpensesView;
