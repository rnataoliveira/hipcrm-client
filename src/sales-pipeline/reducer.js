export default (state = { customer: { selected: null, searchResults: [] } }, action) => {
  switch (action.type) {
  case 'SEARCH_CUSTOMERS_SUCCESS':
    return { ...state, customer: { ...state.customer, searchResults: action.payload.data } }
  case 'CUSTOMER_SELECTED':
    return { ...state, customer: { ...state.customer, selected: action.payload } } 
  default: return { ...state }
  }
}