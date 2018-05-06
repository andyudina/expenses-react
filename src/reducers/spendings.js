let defaultSpendings = {
  isFetching: false,
  wasDateChanged: false,
  dateRange: {
    begin: '',
    end: ''
  },
  spendingsForm: {
    genericError: false
  },
  expenses: {
    spendings: [],
    total: {}
  }
}

const spendings = (state = defaultSpendings, action) => {
  switch (action.type) {
    case 'CHANGE_SPENDINGS_DATE_RANGE':
      return Object.assign(
        {},
        state, 
        {
          dateRange: action.dateRange,
          wasDateChanged: true
        })
    case 'START_FETCHING_SPENDINGS':
      return Object.assign(
        {},
        state,
        {
          isFetching: true,
          wasDateChanged: false,
          spendingsForm: Object.assign({}, state.spendingsForm)
        })

    case 'FETCHING_SPENDINGS_FAILED':
      return Object.assign(
        {},
        state,
        {
          isFetching: false,
          wasDateChanged: false,
          spendingsForm: action.errors
        })
    case 'FETCHING_SPENDINGS_SUCCEEDED':
      return Object.assign(
        {},
        state,
        {
          isFetching: false,
          wasDateChanged: false,
          spendingsForm: Object.assign({}, state.spendingsForm),
          expenses: action.spendings
        })
    default:
      return state
  }
}

export default spendings