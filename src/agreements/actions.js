import { store } from '../store'

export const fetchAgreement = (number) => ({
  type: 'FETCH_agreement',
  payload: {
    request: {
      url: `/agreement/${number}`,
      headers: {
        'Authorization': `Bearer ${store.getState().oidc.user.id_token}`
      }
    }
  }
})

export const fetchAgreements = () => ({
  type: 'FETCH_AGREEMENTS',
  payload: {
    request: {
      url: `/agreements`,
      headers: {
        'Authorization': `Bearer ${store.getState().oidc.user.id_token}`
      }
    }
  }
})

export const filterAgreements = q => ({
  type: 'FILTER_AGREEMENTS',
  q
})

