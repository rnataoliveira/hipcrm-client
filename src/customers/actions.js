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