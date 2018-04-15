export const isExpensesDateValid = (date) => {
  return (!!date)
}

export const areItemsValid = (expenses) => {
  for (var i in expenses) {
  	if ((!expenses[i].item) || (!expenses[i].quantity) || (!expenses[i].amount)) {
  		return false
  	}
  }
  return true
}

export const isExpenseValid = (expense) => {
  return isExpensesDateValid(expense.date) && areItemsValid(expense.expenses)
}
