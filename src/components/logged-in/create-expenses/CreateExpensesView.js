import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import ExpenseDate from 'components/logged-in/create-expenses/ExpenseDate'
import Expense from 'components/logged-in/create-expenses/Expense'

class CreateExpensesView extends Component {

  constructor(props) {
    super(props)
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  componentDidMount() {
    this.props.fetchExpensesForReceipt(
      this.props.match.params.receiptId);
  }

  handleDateChange = (event) => {
    this.props.setDate(event.target.value);
  }

  render() {
    if (this.props.isFetching && this.props.isCreating) {
      // debug random problems
      console.log('This should be imposible')
    }

    return (
    <div>
      {!this.props.isCreating && !this.props.isFetching &&
        <div>
          {this.props.errors.genericError && 
          <span>
            {this.props.errors.genericError}
          </span>}

          {this.props.successfullyCreated &&
          <span>
            Successfully created
          </span>}

          <ExpenseDate
            error={this.props.errors.dateError}
            onChange={this.handleDateChange} 
            date={this.props.date}/>
          <div>

            <ul>
              {this.props.expenses.map((expense, index) =>
              <Expense
                errors={(this.props.errors.itemsErrors[index] || {})}
                onDelete={
                  () => {
                    this.props.deleteExpense(index)
                  }
                }
                onChange={
                  (e) => {
                    this.props.changeExpense(
                    index, e.target.name, e.target.value)
                  }
                }
                key={index}
                {...expense}
              />)}
            </ul>
          </div>
          <button onClick={this.props.addExpense}>
            Add expense
          </button>
          <button onClick={() => this.props.submitExpenses(
            this.props.match.params.receiptId, 
            this.props.date, this.props.expenses)}>
            Submit
          </button>
        </div>}
    {this.props.isCreating && !this.props.isFetching && <h2>Creating...</h2>}
    {!this.props.isCreating && this.props.isFetching && <h2>Fetching...</h2>}
    </div>)
  }
}

export default withRouter(CreateExpensesView);

