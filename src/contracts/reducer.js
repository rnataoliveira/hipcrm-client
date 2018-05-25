export default (state = { all: [] }, action) => {
  switch (action.type) {
  case 'FETCH_CONTRACT_SUCCESS':
    return { ...state, contract: action.payload.data }
  case 'FETCH_CONTRACTS_SUCCESS':
    return { ...state, all: [] }
  case 'FILTER_CONTRACTS':
    return { ...state, filter: action.q || '' }
  default: return { ...state }
  }
}