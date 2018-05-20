export default (state = {}, action) => {
  switch (action.type) {
  case 'SEARCH_CUSTOMERS_SUCCESS':
    return { ...state, customerSearch: action.payload.data }
  case 'CUSTOMER_SELECTED':
    return { ...state, selectedCustomer: action.payload }
  default: return { ...state, customerSearch: [], selectedCustomer: null }
  }
}