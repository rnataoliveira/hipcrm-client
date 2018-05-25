import { store } from '../store'

export const fetchContract = (number) => ({
  type: 'FETCH_CONTRACT',
  payload: {
    request: {
      url: `/contracts/${number}`,
      headers: {
        'Authorization': `Bearer ${store.getState().oidc.user.id_token}`
      }
    }
  }
})

export const fetchContracts = () => ({
  type: 'FETCH_CONTRACTS',
  payload: {
    request: {
      url: `/contracts`,
      headers: {
        'Authorization': `Bearer ${store.getState().oidc.user.id_token}`
      }
    }
  }
})

export const filterContracts = q => ({
  type: 'FILTER_CONTRACTS',
  q
})