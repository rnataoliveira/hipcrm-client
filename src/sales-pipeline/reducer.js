export default (state = { customer: { selected: null, searchResults: [] }, sale: null }, action) => {
  switch (action.type) {
  case 'SEARCH_CUSTOMERS_SUCCESS':
    return { ...state, customer: { ...state.customer, searchResults: action.payload.data } }
  case 'CUSTOMER_SELECTED':
    return { ...state, customer: { ...state.customer, selected: action.payload } } 
  case 'CREATE_SALE_SUCCESS':
    return { ...state, customer: { selected: null, searchResults: [] }, sale: action.payload.data }
  default: return { ...state }
  }
}