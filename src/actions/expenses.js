// Upload expenses linked to a bill
import fetch from 'cross-fetch'
import { SERVER_URL } from 'app-constants'
import { _getErrors } from 'actions/_utils'

export const VALIDATE_EXPENSES_CREATON = 'VALIDATE_EXPENSES_CREATON'
export const START_EXPENSES_CREATION = 'START_EXPENSES_CREATION'
export const EXPENSES_CREATION_FAILED = 'EXPENSES_CREATION_FAILED'
export const EXPENSES_CREATION_SUCCEEDED = 'EXPENSES_CREATION_SUCCEEDED'


const BASE_EXPENSES_API_URL = SERVER_URL + 'spendings/'


function _canCreateExpenses(bill, date, items) {
  // validate if expenses data is valid
  if ((!bill) || (!date) || (!items)) {
    return false
  }
  if (items.length === 0) {
    return false
  }
  for (var i in items) {
    var item = items[i]
    if ((!item.name) || (!item.quantity) || (!item.amount)) {
      return false
    }
  }
  return true
}

const startCreatingExpensesForBill = () => ({
  type: START_EXPENSES_CREATION,
})

const expensesCreationFailed = (errors) => ({
  type: EXPENSES_CREATION_FAILED,
  errors: errors
})

const successfullyCreatedExpenses = () => ({
  type: EXPENSES_CREATION_SUCCEEDED,
})

function createExpensesForBill(receiptId, date, items) {
  // create expenses on remote server
  return (dispatch) => {
    let url = BASE_EXPENSES_API_URL + receiptId + '/'
    dispatch(startCreatingExpensesForBill())
    return fetch(url, {
      method: 'post',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // api endpoiint needs datetime, not date
        // TODO: refactor this shit
        date: date + ' 00:00:00',
        items: items
      })
    })
    .then(response => {
        console.log(response)
        if (response.status > 400) {
          // unknown error occured
          throw new Error('Unknown error. Please contact the support')
        } else if (response.status === 400) {
          response.json()
            .then(json => dispatch(expensesCreationFailed(_getErrors(json))))
        } else {
          response.json()
            .then(json => dispatch(successfullyCreatedExpenses()))
        }
      })
      .catch(err => {
        dispatch(expensesCreationFailed({genericError: err.message}))
      })
  }
}

const validateExpensesCreation = (bill, date, items) => ({
  // send action to validate if expenses can be created
  type: VALIDATE_EXPENSES_CREATON,
  bill: bill,
  date: date,
  items: items,
})


export function attemtCreateExpensesForBill(
    bill, date, items
  ) {
  // attempt create expenses for bill
  return (dispatch) => {
    dispatch(validateExpensesCreation(bill, date, items))
    if (!(_canCreateExpenses(bill, date, items))) {
      return
    }
    dispatch(createExpensesForBill(bill, date, items))
  }
}

export const addExpense = () => ({
  type: 'ADD_EXPENSE',
})

export const deleteExpense = (key) => ({
  type: 'REMOVE_EXPENSE',
  key: key,
})

export const setDate = (date) => ({
  type: 'SET_DATE',
  date: date,
})

export const changeExpense = (index, name, value) => ({
  type: 'CHANGE_EXPENSE',
  index: index,
  name: name,
  value: value,
})

// Fetch expenses for receipt
export const SUCCESSFULLY_FETCHED_EXPENSES_FOR_RECEIPT = 
  'SUCCESSFULLY_FETCHED_EXPENSES_FOR_RECEIPT'
export const FETCHED_EXPENSES_FAILED_FOR_RECEIPT = 
  'FETCHED_EXPENSES_FAILED_FOR_RECEIPT'
export const START_FETCHiNG_EXPENSES_FOR_RECEIPT =
  'START_FETCHiNG_EXPENSES_FOR_RECEIPT'


const startFetchingExpenses = () => ({
  type: START_FETCHiNG_EXPENSES_FOR_RECEIPT,
})

const successfullyFetchedExpenses = (expenses) => ({
  type: SUCCESSFULLY_FETCHED_EXPENSES_FOR_RECEIPT,
  expenses: expenses
})

const expensesFetchingFailed = (errors) => ({
  type: FETCHED_EXPENSES_FAILED_FOR_RECEIPT,
  errors: errors
})

export function fetchExpensesForReceipt(receiptId) {
  return (dispatch) => {
    dispatch(startFetchingExpenses())
    let url = BASE_EXPENSES_API_URL + receiptId + '/'
    return fetch(url, {
      method: 'get',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
      },
    })
    .then(response => {
        console.log(response)
        if (response.status >= 400) {
          // unknown error occured
          throw new Error('Unknown error. Please contact the support')
        } else {
          response.json()
            .then(json => dispatch(successfullyFetchedExpenses(json)))
        }
      })
      .catch(err => {
        dispatch(expensesFetchingFailed({genericError: err.message}))
      })
  }
}