import { store } from '../store'

export const newCustomerForm = () => ({
  type: 'NEW_CUSTOMER_FORM'
})

export const createCustomer = (customer, type) => ({
  type: 'CREATE_CUSTOMER',
  payload: {
    request: {
      method: 'post',
      url: `customers/${type}`,
      headers: {
        'Authorization': `Bearer ${store.getState().oidc.user.id_token}`,
        'AccessToken': store.getState().oidc.user.access_token
      },
      data: customer
    }
  }
})

export const fetchCustomer = (customerId) => ({
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

export const fetchCustomers = () => ({
  type: 'FETCH_CUSTOMERS',
  payload: {
    request: {
      url: `/customers`,
      headers: {
        'Authorization': `Bearer ${store.getState().oidc.user.id_token}`
      }
    }
  }
})

export const changeCustomerType = customerType => ({
  type: 'CHANGE_CUSTOMER_TYPE',
  customerType
})

export const deleteCustomer = customerId => ({
  type: 'DELETE_CUSTOMER',
  payload: {
    request: {
      method: 'delete',
      url: `/customers/${customerId}`,
      headers: {
        'Authorization': `Bearer ${store.getState().oidc.user.id_token}`,
        'AccessToken': store.getState().oidc.user.access_token
      }
    }
  },
  customerId
})

export const filterCustomers = q => ({
  type: 'FILTER_CUSTOMERS',
  q
})

export const updateCustomer = (customer, type) => ({
  type: 'UPDATE_CUSTOMER',
  payload: {
    request: {
      method: 'put',
      url: `customers/${type}`,
      headers: {
        'Authorization': `Bearer ${store.getState().oidc.user.id_token}`,
        'AccessToken': store.getState().oidc.user.access_token
      },
      data: customer
    }
  }
})