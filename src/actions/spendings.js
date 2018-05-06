import fetch from 'cross-fetch'
import { SERVER_URL } from 'app-constants'

export const START_FETCHING_SPENDINGS = 'START_FETCHING_SPENDINGS'
export const FETCHING_SPENDINGS_FAILED = 'FETCHING_SPENDINGS_FAILED'
export const FETCHING_SPENDINGS_SUCCEEDED = 'FETCHING_SPENDINGS_SUCCEEDED'
export const CHANGE_SPENDINGS_DATE_RANGE = 'CHANGE_SPENDINGS_DATE_RANGE'

const BASE_EXPENSES_API_URL = SERVER_URL + 'spendings/expensive/'

const startFetchingSpendings = () => ({
  type: START_FETCHING_SPENDINGS
})

const fetchingSpendingsFailed = (errors) => ({
  type: FETCHING_SPENDINGS_FAILED,
  errors: errors
})

const fetchingSpendingsSucceeded = (spendings) => ({
  type: FETCHING_SPENDINGS_SUCCEEDED,
  spendings: spendings
})

export function fetchSpendings(beginDate, endDate) {
  let dates = ''
  if (beginDate) {
    dates = dates + 'begin_time=' + beginDate + '&'
  }
  if (endDate) {
    dates = dates + 'end_time=' + endDate
  }

  let url = BASE_EXPENSES_API_URL
  if (dates) {
    url = url + '?' + dates
  }
  return (dispatch) => {
    dispatch(startFetchingSpendings())
    return fetch(url, {
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
            .then(json => dispatch(fetchingSpendingsSucceeded(json)))
        }
      })
      .catch(err => {
        dispatch(fetchingSpendingsFailed({genericError: err.message}))
      })
  }
}

const changeDateRange = (dateRange) => ({
  type: CHANGE_SPENDINGS_DATE_RANGE,
  dateRange: dateRange
})

export function attemptChangeDateRange(dateType, value, currentDateRange) {
  return (dispatch) => {
    let dateRangeDiff = {}
    dateRangeDiff[dateType] = value
    let newDateRange = Object.assign(
      {},
      currentDateRange,
      dateRangeDiff)
    dispatch(changeDateRange(newDateRange))
  }
}
export function attemptFetchSpendings(
    dateRange, wasDateChanged) {
  return (dispatch) => {
    console.log(dateRange, wasDateChanged)
    if (wasDateChanged) {
      dispatch(fetchSpendings(dateRange.begin, dateRange.end))
    }
  }
}
