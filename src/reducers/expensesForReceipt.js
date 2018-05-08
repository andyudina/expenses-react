// Defauls
let defaultExpenses = {
  expenses: [
  ],
  date: '',
  receiptId: undefined,
  isCreating: false,
  isFetching: false,
  successfullyCreated: false,
  expensesForm: {
    genericError: false,
    dateError: false,
    itemsError: false,
    // dict in format {itemIndex: {itemError, amountError, quantityError}}
    itemsErrors: {}
  }
}


// Update expenses
export const _isExpensesDateValid = (date) => {
  return (!!date)
}

export const _areItemsValid = (expenses) => {
  for (var i in expenses) {
    if ((!expenses[i].name) || (!expenses[i].quantity) || (!expenses[i].amount)) {
      return false
    }
  }
  return true
}

export const _isExpenseValid = (expense) => {
  return _isExpensesDateValid(expense.date) && _areItemsValid(expense.expenses)
}

const _addExpenses = (expenses) => {
  return [
    ...expenses,
    {
      'name': '',
      'quantity': 0,
      'amount': 0
    }
  ]
}

const _removeExpenses = (expenses, indexToRemove) => {
  let newExpenses = [];
  for (let index = 0; index < expenses.length; index++) {
    if (index !== indexToRemove) {
      newExpenses.push(expenses[index])
    }
  }
  return newExpenses
}

const _changeExpenses = (expenses, indexToChange, name, value) => {
  let changedExpenses = [];
  for (let index = 0; index < expenses.length; index++) {
    if (index !== indexToChange) {
        changedExpenses.push(expenses[index])
    } else {
      let expenseDiff = {}
      expenseDiff[name] = value
      let expense = Object.assign(
          {}, 
          expenses[index],
          expenseDiff)
      changedExpenses.push(expense)
    }
  }
  return changedExpenses 
}

const _validateExpenseCreation = (receipt, date, items) => {
  let errors = Object.assign({}, defaultExpenses.expensesForm)
  if (!(receipt)) {
    console.log('No receipt id dound -- mistery')
    errors.genericError = 'Something went wrong. Please contact the support'
  }
  if (!(date)) {
    errors.dateError = 'Date should be filled'
  }
  if ((!items) || items.length === 0) {
    errors.itemsError = 'Items can not be empty'
  }
  for (var index in items) {
    var item = items[index]
    errors.itemsErrors[index] = {}
    for (var key in item) {
      if (!(item[key])) {
        errors.itemsErrors[index][key] = 'This field should not be empty'
      }
    }
  }
  return errors
}

// Fetch expenses
const _getExpensesFromFetchedResult = (expenses) => {
  // process fetched expenses
  if (expenses.spendings_saved.items.length !== 0) {
    // we have some saved expenses and will work with them
    return {
      expenses: expenses.spendings_saved.items,
      date: expenses.spendings_saved.date,
      expensesForm: Object.assign({}, defaultExpenses.expensesForm)
    }
  } else {
    // we don't have saved expenses yet and will work with parsed one
    if (expenses.spendings_parsed.parse_error) {
      // we failed to parse the receipt
      return {
        expenses: [],
        date: '',
        expensesForm: Object.assign(
          {}, 
          defaultExpenses.expensesForm,
          {genericError: 'Failed to parse receipt'})
      }
    } else {
      return {
        expenses: expenses.spendings_parsed.items,
        date: expenses.spendings_parsed.date,
        expensesForm: Object.assign({}, defaultExpenses.expensesForm)
      }
    }
  }
}


const expensesForReceipt = (state = defaultExpenses, action) => {
  switch (action.type) {
    // set receipt if from url
    case 'SET_RECEIPT_ID_FROM_URL':
      return Object.assign({}, 
        state, {
        receiptId: action.receiptId
      })

    // modify expenses creation in a view
    case 'ADD_EXPENSE':
      return Object.assign(
        {},
        state,
        {
          expenses: _addExpenses(state.expenses)
        })

    case 'REMOVE_EXPENSE':
      return Object.assign(
        {},
        state,
        {
          expenses: _removeExpenses(state.expenses, action.key)
        })

    case 'SET_DATE':
      return Object.assign(
        {},
        state,
        {
          date: action.date
        })

    case 'CHANGE_EXPENSE':
      return Object.assign(
        {},
        state,
        {
          expenses: _changeExpenses(
            state.expenses, action.index, 
            action.name, action.value)
        })

    // create expenses
    case 'VALIDATE_EXPENSES_CREATON':
      return Object.assign(
          {},
          state,
          {
            isCreating: false,
            successfullyCreated: false,
            expensesForm: _validateExpenseCreation(
              action.receipt, action.date, action.items)
        })

    case 'START_EXPENSES_CREATION':
      return Object.assign(
        {},
        state,
        {
          isCreating: true,
          successfullyCreated: false,
          expensesForm: Object.assign(
            {},
            defaultExpenses.expensesForm)
        })

    case 'EXPENSES_CREATION_FAILED':
      return Object.assign(
        {}, 
        state, 
        {
          isCreating: false,
          successfullyCreated: false,
          expensesForm: Object.assign(
            {},
            defaultExpenses.expensesForm,
            action.errors)
        })

    case 'EXPENSES_CREATION_SUCCEEDED':
      return Object.assign(
        {}, state, 
        {
          isCreating: false,
          successfullyCreated: true,
          expensesForm: {
            genericError: false,
            dateError: false,
            itemsError: false,
            itemsErrors: {}
          }
        })

    // fetch expenses
    case 'SUCCESSFULLY_FETCHED_EXPENSES_FOR_RECEIPT':
      return Object.assign(
        {},
        state,
        {
          isFetching: false,
        },
        _getExpensesFromFetchedResult(action.expenses))

    case 'FETCHED_EXPENSES_FAILED_FOR_RECEIPT':
      return Object.assign(
        {},
        state,
        {
          isFetching: false,
          expensesForm: Object.assign(
            {},
            defaultExpenses.expensesForm,
            action.errors)
        })
    case 'START_FETCHiNG_EXPENSES_FOR_RECEIPT':
      return Object.assign(
        {},
        state,
        {
          isFetching: true,
          expensesForm: Object.assign(
            {},
            defaultExpenses.expensesForm)
        })
    default:
      return state
  }
}

export default expensesForReceipt