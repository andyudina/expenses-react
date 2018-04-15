let defaultExpenses = {
  'expenses': [
    {
      'item': 'HEAT&EAT MOROCCAN FALAFEL',
      'amount': 3.35,
      'quantity': 1
    },
    {
      'item': 'NECTARINE RASIA ALPINE',
      'amount': 2.85,
      'quantity': 1
    },
    {
      'item': 'RAJEUUSTO PEHMEA',
      'amount': 4.17,
      'quantity': 3
    },
  ],
  'date': '2018-06-06'
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

const expenses = (state = defaultExpenses, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return Object.assign(
        {}, state, 
        {
          'expenses': _addExpenses(state.expenses)
        })

    case 'REMOVE_EXPENSE':
      return Object.assign(
        {}, state, 
        {
          'expenses': _removeExpenses(state.expenses, action.key)
        })
    case 'SET_DATE':
      return Object.assign(
        {}, state,
        {
          'date': action.date
        })
    case 'CHANGE_EXPENSE':
      return Object.assign(
        {}, state, 
        {
          'expenses': _changeExpenses(
            state.expenses, action.index, 
            action.name, action.value)
        })     
    default:
      return state
  }
}

export default expenses