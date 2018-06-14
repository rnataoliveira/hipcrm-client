export default (state = { all: [], agreement: null, filter: '' }, action) => {
  switch (action.type) {
  case 'FETCH_AGREEMENT_SUCCESS':
    return { ...state, all: [], agreement: action.payload.data.agreement }
  case 'FETCH_AGREEMENTS_SUCCESS':
    return { ...state, all: [ ...action.payload.data ], filter: '' }
  case 'FILTER_AGREEMENT':
    return { ...state, filter: action.q || '' }
  default: return { ...state }
  }
}