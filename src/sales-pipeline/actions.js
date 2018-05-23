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

export const customerSelected = customer => ({
  type: 'CUSTOMER_SELECTED',
  payload: customer
})

export const createSale = ({ customerId }, accessToken) => ({
  type: 'CREATE_SALE',
  payload: {
    request: {
      method: 'post',
      url: 'sales-pipelines',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
      data: {
        customerId
      }
    }
  }
})