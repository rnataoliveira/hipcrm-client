export default (state = { customerDetails: null }, action) => {
  switch (action.type) {
  case 'GET_CUSTOMER_SUCCESS':
    return { ...state, customerDetails: action.payload.data }
  default: return { ...state }
  }
}