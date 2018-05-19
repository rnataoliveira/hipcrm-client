export const reducer = (state = {}, action) => {
  switch (action.type) {
  case 'SEARCH_CUSTOMERS_SUCCESS':
    return { ...state, customers: action.payload.data }
  default: return { ...state, customers: [] }
  }
}