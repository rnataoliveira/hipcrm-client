export const getCustomer = (customerId, accessToken) => ({
  type: 'GET_CUSTOMER',
  payload: {
    request: {
      url: `/customers/${customerId}`,
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }
  }
})