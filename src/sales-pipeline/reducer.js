export default (state = { new: { customers: [], selectedCustomer: null }, sale: null, sales: [], filter: '' }, action) => {
  switch (action.type) {
  case 'SEARCH_CUSTOMERS_SUCCESS':
    return { ...state, new: { ...state.new, customers: action.payload.data } }
  case 'CUSTOMER_SELECTED':
    return { ...state, new: { ...state.new, selectedCustomer: action.customer } }
  case 'CREATE_SALE_SUCCESS':
    return { ...state, new: { ...state.new, saleId: action.payload.data.saleId } }
  case 'CREATE_SALE_FAIL':
    return { ...state, new: { ...state.new, errors: action.error.response.data } }
  case 'FETCH_SALE_SUCCESS':
    return { ...state, new: { customers: [], selectedCustomer: null }, sale: action.payload.data }
  case 'FETCH_SALES_SUCCESS':
    return { ...state, sales: [ ...action.payload.data ], filter: '' }
  case 'DELETE_SALE_SUCCESS':
    return { ...state, sales: state.sales.filter(sale => sale.id != action.meta.previousAction.saleId) }
  case 'FILTER_SALES':
    return { ...state, filter: action.q || '' }
  default: return { ...state }
  }
}