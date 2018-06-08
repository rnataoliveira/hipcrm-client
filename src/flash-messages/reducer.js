export default (state = [], action) => {
  switch (action.type) {
  case 'FLASH_MESSAGE':
    return [ ...state, action.message ]
  case 'FLASH_MESSAGE_DISPLAYED':
    return []
  default: return [ ...state ]
  }
}