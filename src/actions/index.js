export const searchCustomers = (q, accessToken) => ({
  type: 'SEARCH_CUSTOMERS',
  payload: {
    request: {
      url: '/customers',
      params: { q },
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }
  }
})