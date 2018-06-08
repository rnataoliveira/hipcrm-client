export const flashMessage = message => ({
  type: 'FLASH_MESSAGE',
  message
})

export const displayed = () => ({
  type: 'FLASH_MESSAGE_DISPLAYED'
})