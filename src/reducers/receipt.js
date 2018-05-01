// Defauls
let defaultExpenses = {
  expenses: [
    {
      item: 'test',
      quantity: 1,
      amount: 10
    }
  ],
  date: '2018-10-10',
  isCreating: false,
  successfullyCreated: false,
  expensesForm: {
    genericError: false,
    dateError: false,
    itemsError: false,
    // dict in format {itemIndex: {itemError, amountError, quantityError}}
    itemsErrors: {}
  }
}

let defaultReceipt = {
  isUploading: false,
  successfullyUploaded: false,
  uploadFileForm: {
    imageError: false,
    genericError: false,
  },
  id: false,
  parseStatus: false,
  expenses: defaultExpenses
}

// Expenses related logic
export const _isExpensesDateValid = (date) => {
  return (!!date)
}

export const _areItemsValid = (expenses) => {
  for (var i in expenses) {
    if ((!expenses[i].item) || (!expenses[i].quantity) || (!expenses[i].amount)) {
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
      'item': '',
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

const _validateExpenseCreation = (bill, date, items) => {
  let errors = Object.assign({}, defaultExpenses.expensesForm)
  if (!(bill)) {
    console.log('No bill id dound -- mistery')
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

// receipt upload logic
const verifyUploadFile = (file) => {
  if (file) {
    return {
      imageError: false,
      genericError: false
    }
  } else {
    return {
      imageError: 'File should not be empty',
      genericError: false
    }
  }
}


const receipt = (state = defaultReceipt, action) => {
  switch (action.type) {
    // related to receupt upload
    case 'VALIDATE_UPLOAD_FILE':
      return Object.assign(
        {},
        state,
        verifyUploadFile(action.file))
    case 'START_RECEIPT_UPLOAD':
      return Object.assign(
        {},
        state,
        {
          isUploading: true
        })
    case 'RECEIPT_UPLOAD_FAILED':
      return Object.assign(
        {},
        state,
        {
          isUploading: false,
          uploadFileForm: Object.assign(
            {},
            state.uploadFileForm,
            action.errors),
          successfullyUploaded: false
        })
    case 'RECEIPT_UPLOADED_BUT_NOT_PARSED':
      return Object.assign(
        {},
        state,
        {
          isUploading: false,
          successfullyUploaded: true,
          parseStatus: false,
          uploadFileForm: Object.assign(
            {}, 
            defaultReceipt.uploadFileForm),
          id: action.receiptId,
        })
    case 'RECEIPT_SUCCESSFULLY_UPLOADED':
      return Object.assign(
        {},
        state,
        {
          isUploading: false,
          successfullyUploaded: true,
          parseStatus: true,
          uploadFileForm: Object.assign(
            {}, 
            defaultReceipt.uploadFileForm),
          id: action.receiptId,
          expenses: action.spendings
        })
    case 'CLEAN_SUCCESSFULLY_UPLOADED_FILES':
      return Object.assign({}, state, {
        'successfullyUploaded': false
      })

    // set receipt if from url
    case 'SET_RECEIPT_ID_FROM_URL':
      return Object.assign({}, state, {
        id: action.receiptId
      })

    // modify expenses creation in a view
    case 'ADD_EXPENSE':
      return Object.assign(
        {}, state, 
        {
          expenses: Object.assign(
            {},
            state.expenses,
            {
              expenses: _addExpenses(state.expenses.expenses)
            }
          )
        })

    case 'REMOVE_EXPENSE':
      return Object.assign(
        {}, state, 
        {
          expenses: Object.assign(
            {},
            state.expenses,
            {
              expenses: _removeExpenses(state.expenses.expenses, action.key)
            }
          )
        })

    case 'SET_DATE':
      return Object.assign(
        {}, state, 
        {
          expenses: Object.assign(
            {},
            state.expenses,
            {
              date: action.date
            }
          )
        })

    case 'CHANGE_EXPENSE':
      return Object.assign(
        {}, state, 
        {
          expenses: Object.assign(
            {},
            state.expenses,
            {
              expenses: _changeExpenses(
                state.expenses.expenses, action.index, 
                action.name, action.value)
            }
          )
        })

    // create expenses
    case 'VALIDATE_EXPENSES_CREATON':
      return Object.assign(
        {}, state, 
        {
          expenses: Object.assign(
            {},
            state.expenses,
            {
              isCreating: false,
              successfullyCreated: false,
              expensesForm: _validateExpenseCreation(
                action.bill, action.date, action.items)
            }
          )
        })

    case 'START_EXPENSES_CREATION':
      return Object.assign(
        {}, state, 
        {
          expenses: Object.assign(
            {},
            state.expenses,
            {
              isCreating: true,
              successfullyCreated: false,
              expensesForm: Object.assign(
                {},
                defaultExpenses.expensesForm
              )
            }
          )
        })

    case 'EXPENSES_CREATION_FAILED':
      return Object.assign(
        {}, state, 
        {
          expenses: Object.assign(
            {},
            state.expenses,
            {
              isCreating: false,
              successfullyCreated: false,
              expensesForm: Object.assign(
                {},
                state.expenses.expensesForm,
                action.errors
              )
            }
          )
        })

    case 'EXPENSES_CREATION_SUCCEEDED':
      return Object.assign(
        {}, state, 
        {
          expenses: Object.assign(
            {},
            state.expenses,
            {
              isCreating: false,
              successfullyCreated: true,
              expensesForm: {
                genericError: false,
                dateError: false,
                itemsError: false,
                itemsErrors: {}
              }
            }
          )
        })
    default:
      return state
  }
}

export default receipt