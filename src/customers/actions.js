import { store } from '../store'

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

export const filterCustomers = q => ({
  type: 'FILTER_CUSTOMERS',
  q
})

export const changeCustomerType = customerType => ({
  type: 'CHANGE_CUSTOMER_TYPE',
  customerType
})