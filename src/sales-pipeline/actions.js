import { store } from '../store'

export const searchCustomers = q => ({
  type: 'SEARCH_CUSTOMERS',
  payload: {
    request: {
      url: '/customers',
      params: { q },
      headers: {
        'Authorization': `Bearer ${store.getState().oidc.user.id_token}`
      }
    }
  }
})

export const fetchCustomer = customerId => ({
  type: 'FETCH_CUSTOMER',
  payload: {
    request: {
      url: `/customers/${customerId}`,
      headers: {
        'Authorization': `Bearer ${store.getState().oidc.user.id_token}`
      }
    }
  }
})

export const customerSelected = customer => ({
  type: 'CUSTOMER_SELECTED',
  payload: customer
})

export const createSale = ({ customerId }) => ({
  type: 'CREATE_SALE',
  payload: {
    request: {
      method: 'post',
      url: 'sales-pipelines',
      headers: {
        'Authorization': `Bearer ${store.getState().oidc.user.id_token}`,
        'AccessToken': store.getState().oidc.user.access_token
      },
      data: {
        customerId
      }
    }
  }
})

export const fetchSale = saleId => ({
  type: 'FETCH_SALE',
  payload: {
    request: {
      url: `/sales-pipelines/${saleId}`,
      headers: {
        'Authorization': `Bearer ${store.getState().oidc.user.id_token}`,
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

export const fetchSales = () => ({
  type: 'FETCH_SALES',
  payload: {
    request: {
      url: '/sales-pipelines',
      headers: {
        'Authorization': `Bearer ${store.getState().oidc.user.id_token}`,
      }
    }
  }
})

export const deleteSale = saleId => ({
  type: 'DELETE_SALE',
  payload: {
    request: {
      method: 'delete',
      url: `/sales-pipelines/${saleId}`,
      headers: {
        'Authorization': `Bearer ${store.getState().oidc.user.id_token}`,
        'AccessToken': store.getState().oidc.user.access_token
      }
    }
  },
  saleId
})