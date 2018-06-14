export default (state = { new: { customers: [], selectedCustomer: null }, sale: null, sales: [], filter: '' }, action) => {
  switch (action.type) {
  case 'SEARCH_CUSTOMERS_SUCCESS':
    return { ...state, new: { ...state.new, customers: action.payload.data } }
  case 'CUSTOMER_SELECTED':
    return { ...state, new: { ...state.new, saleId: null, selectedCustomer: action.customer } }
  case 'FETCH_CUSTOMER_SUCCESS':
    return { ...state, new: { ...state.new, customer: action.payload.data } }
  case 'CREATE_SALE_SUCCESS':
    return { ...state, new: { ...state.new, customer: null, saleId: action.payload.data.saleId } }
  case 'CREATE_SALE_FAIL':
    return { ...state, new: { ...state.new, errors: action.error.response.data } }
  case 'CREATE_SALE_FAIL_DISPLAY':
    return { ...state, new: { ...state.new, errors: null } }
  case 'FETCH_SALE_SUCCESS':
    return { ...state, new: { customers: [], selectedCustomer: null }, sale: action.payload.data }
  case 'FETCH_SALES_SUCCESS':
    return { ...state, sales: [ ...action.payload.data ], filter: '' }
  case 'DELETE_SALE_SUCCESS':
    return { ...state, sales: state.sales.filter(sale => sale.id !== action.meta.previousAction.saleId) }
  case 'FILTER_SALES':
    return { ...state, filter: action.q || '' }
  case 'MESSAGE_SHOWED': 
    return { new: { ...state.new } }
  case 'SAVE_AGREEMENT_SUCCESS':
    return { ...state, sale: { ...state.sale, agreementId: action.payload.data.id } }
  default: return { ...state }
  }
}