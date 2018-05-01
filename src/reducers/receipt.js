// Defauls
let defaultExpenses = {
  'expenses': [
  ],
  'date': ''
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
    // related to expenses creaton
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
   
    default:
      return state
  }
}

export default receipt