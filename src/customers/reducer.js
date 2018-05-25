export default (state = {}, action) => {
  switch (action.type) {
  case 'FETCH_CUSTOMER_SUCCESS':
    return { ...state, customer: action.payload.data }
  default: return { ...state }
  }
}