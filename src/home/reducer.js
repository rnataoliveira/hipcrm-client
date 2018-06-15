export default (state = { appointments: [] }, action) => {
  switch (action.type) {
  case 'FETCH_ALL_APPOINTMENTS_SUCCESS':
    return { ...state, appointments: action.payload.data }
  default: return [ ...state ]
  }
}