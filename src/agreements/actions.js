import { store } from '../store'

export const fetchAgreement = (agreementId) => ({
  type: 'FETCH_AGREEMENT',
  payload: {
    request: {
      url: `/agreements/${agreementId}`,
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

