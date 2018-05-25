export default (state = { all: [] }, action) => {
  switch (action.type) {
  case 'FETCH_CUSTOMER_SUCCESS':
    return { ...state, customer: action.payload.data }
  case 'FETCH_CUSTOMERS_SUCCESS':
    return { ...state, all: action.payload.data }
  case 'FILTER_CUSTOMERS':
    return { ...state, filter: action.q || '' }
  default: return { ...state }
  }
}