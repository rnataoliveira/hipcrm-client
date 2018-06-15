export default (state = { all: [], agreement: {}, filter: '' }, action) => {
  switch (action.type) {
  case 'FETCH_AGREEMENT_SUCCESS':
    return { ...state, agreement: action.payload.data }
  case 'FETCH_AGREEMENTS_SUCCESS':
    return { ...state, all: [ ...action.payload.data ], filter: '' }
  case 'FILTER_AGREEMENTS':
    return { ...state, filter: action.q || '' }
  default: return { ...state }
  }
}