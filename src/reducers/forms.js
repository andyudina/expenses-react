import { isExpensesDateValid, areItemsValid } from './_expenses'

let defaultErrors = {
  'createExpensesError': null,
  'successfullySubmitedExpenses': null
}


const validateExpenses = (expenses) => {
  var error = null;
  var message = null;
  if (!(isExpensesDateValid(expenses.date))) {
    error = 'Please fill in the date'
  } else if (!(areItemsValid(expenses.expenses))) {
    error = 'All expenses should be filled in'
  }
  if (!error) {
    message = 'Successfully submited'
  }
  return {
    'createExpensesError': error,
    'successfullySubmitedExpenses': message
  }
}

const forms = (state = defaultErrors, action) => {
  switch (action.type) {
    case 'SUBMIT_EXPENSES':
      return Object.assign(
        {}, state, 
        validateExpenses(action.expenses))    
    default:
      return state
  }
}

export default forms