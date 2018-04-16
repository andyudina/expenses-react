// Login/SignUp view actions

export const switchToLoginOrSignup = (action) => ({
  type: 'SWITCH_TO_LOGIN_OR_SIGNUP',
  action: action
})

export const tryLogin = (email, password) => ({
  type: 'TRY_LOGIN',
  email: email,
  password: password
})

export const trySignup = (email, password, repeat_password) => ({
  type: 'TRY_SIGNUP',
  email: email,
  password: password,
  repeat_password: repeat_password,
})

export const tryUploadFile = (file) => ({
  type: 'TRY_UPLOAD_FILE',
  file: file,
})

export const LoginOrSignUpActions = {
  LOGIN: 'LOGIN',
  SIGNUP: 'SIGNUP'
}

export const LoggedInActions = {
  UPLOAD: 'UPLOAD',
  SHOW_EXPENSES: 'SHOW_EXPENSES',
  CREATE_EXPENSES: 'CREATE_EXPENSES'
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

export const submitExpenses = (expenses) => ({
  type: 'SUBMIT_EXPENSES',
  expenses: expenses
})

export const switchToNewView = (action) => ({
  type: 'SWITCH_TO_NEW_VIEW',
  action: action
})

export const changeDateRange = (dateType, value) => ({
  type: 'CHANGE_SPENDINGS_DATE_RANGE',
  dateType: dateType,
  value: value,
})
