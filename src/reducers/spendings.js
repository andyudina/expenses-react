let defaultSpendings = {
  'dateRange': {
    'begin': '',
    'end': ''
  },
  'expenses': {
    'spendings': [
      {
        'name': 'Cottage cheese',
        'total_amount': 56.2,
        'total_quantity': 12,
        'bills_number': 2,
      },
      {
        'name': 'Bananas',
        'total_amount': 18.13,
        'total_quantity': 8,
        'bills_number': 2,

      },
      {
        'name': 'Apples',
        'total_amount': 10.11,
        'total_quantity': 2,
        'bills_number': 1,

      }
    ],
    'total': {
      'total_bills_number': 2,
      'total_quantity': 22,
      'total_amount': 84.44
    }
  }
};

const spendings = (state = defaultSpendings, action) => {
  switch (action.type) {
    case 'CHANGE_SPENDINGS_DATE_RANGE':
      let dateRangeDiff = {};
      dateRangeDiff[action.dateType] = action.value
      let newDateRange = Object.assign(
        {},
        defaultSpendings.dateRange,
        dateRangeDiff)
      return Object.assign(
        {},
        state, 
        {
          'dateRange': newDateRange
        })
    default:
      return state
  }
}

export default spendings