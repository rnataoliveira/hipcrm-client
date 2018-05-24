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

export const fetchCustomer = (customerId, oidc) => ({
  type: 'FETCH_CUSTOMER',
  payload: {
    request: {
      url: `/customers/${customerId}`,
      headers: {
        'Authorization': `Bearer ${oidc.id_token}`
      }
    }
  }
})

export const customerSelected = customer => ({
  type: 'CUSTOMER_SELECTED',
  payload: customer
})

export const createSale = ({ customerId }, oidc) => ({
  type: 'CREATE_SALE',
  payload: {
    request: {
      method: 'post',
      url: 'sales-pipelines',
      headers: {
        'Authorization': `Bearer ${oidc.id_token}`,
        'AccessToken': oidc.access_token
      },
      data: {
        customerId
      }
    }
  }
})

export const fetchSale = (saleId, oidc) => ({
  type: 'FETCH_SALE',
  payload: {
    request: {
      url: `/sales-pipelines/${saleId}`,
      headers: {
        'Authorization': `Bearer ${oidc.id_token}`
      }
    }
  }
})

export const getCalendar = (calendarId, accessToken) => ({
  type: 'GET_SALE_APPOINTMENTS',
  payload: {
    request: {
      method: 'get',
      url: '/'
    }
  }
})