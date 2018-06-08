export default (state = { all: [] }, action) => {
  switch (action.type) {
  case 'FETCH_AGREEMENT_SUCCESS':
    return { ...state, agreements: action.payload.data }
  case 'FETCH_AGREEMENTS_SUCCESS':
    return { ...state, all: [] }
  case 'FILTER_AGREEMENT':
    return { ...state, filter: action.q || '' }
  case 'SAVE_AGREEMENT_SUCCESS':
    return { 
      ...state, 
      messages: [ 'Cliente Cadastrado' ], 
      new: { }, 
      agreement: { saleId: action.payload.data.saleId } 
    }
  case 'SAVE_AGREEMENT_FAIL':
    return { ...state, new: { ...state.new, errors: action.error } }
  default: return { ...state }
  }
}