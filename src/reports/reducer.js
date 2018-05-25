export default (state = { all: [] }, action) => {
  switch (action.type) {
  case 'FETCH_REPORT_SUCCESS':
    return { ...state, contract: action.payload.data }
  case 'FETCH_REPORTS_SUCCESS':
    return { ...state, all: [] }
  case 'FILTER_REPORTS':
    return { ...state, filter: action.q || '' }
  default: return { ...state }
  }
}