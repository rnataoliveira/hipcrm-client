export default (state = { all: [], new: {}, customer: {} }, action) => {
  switch (action.type) {
  case 'FETCH_CUSTOMER_SUCCESS':
    return { ...state, customer: action.payload.data }
  case 'FETCH_CUSTOMERS_SUCCESS':
    return { ...state, all: action.payload.data, customer: {} }
  case 'FILTER_CUSTOMERS':
    return { ...state, filter: action.q || '' }
  case 'CREATE_CUSTOMER_PHYSICAL_PERSON_FAIL':
    return { ...state, new: { ...state.new, errors: action.error } }
  case 'CREATE_CUSTOMER_SUCCESS':
    return { ...state, new: { }, customer: { customerId: action.payload.data.customerId } }
  case 'CREATE_CUSTOMER_FAIL':
    return { ...state, new: { ...state.new, errors: action.error } }
  case 'DELETE_CUSTOMER_SUCCESS':
    return { ...state, all: state.all.filter(customer => customer.id !== action.meta.previousAction.customerId) }
  case 'DELETE_CUSTOMER_FAIL':
    return { ...state }
  case 'UPDATE_CUSTOMER_SUCCESS':
    return { ...state, customer: { ...action.payload.data, updated: true } }
  case 'UPDATE_CUSTOMER_FAIL':
    return { ...state }
  default: return { ...state }
  }
}