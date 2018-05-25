export default (state = { new: { customers: [], customer: null }, sale: null, sales: [] }, action) => {
  switch (action.type) {
  case 'SEARCH_CUSTOMERS_SUCCESS':
    return { ...state, new: { ...state.new, customers: action.payload.data } }
  case 'FETCH_CUSTOMER_SUCCESS':
    return { ...state, new: { ...state.new, customer: action.payload.data } }
  case 'CREATE_SALE_SUCCESS':
    return { ...state, new: { ...state.new, saleId: action.payload.data.saleId } }
  case 'CREATE_SALE_FAIL':
    return { ...state, new: { ...state.new, errors: action.error.response.data } }
  case 'FETCH_SALE_SUCCESS':
    return { ...state, new: { customers: [], customer: null }, sale: action.payload.data }
  case 'FETCH_SALES_SUCCESS':
    return { ...state, sales: [ ...action.payload.data ] }
  default: return { ...state }
  }
}