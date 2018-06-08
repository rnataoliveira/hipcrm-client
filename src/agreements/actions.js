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
      url: `/agreement`,
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

export const saveAgreement = (sale, saleId, type) => ({
  type: 'SAVE_AGREEMENT',
  payload: {
    request: {
      method: 'post',
      url: `sales-pipelines/${saleId}/agreement/${type}`,
      headers: {
        'Authorization': `Bearer ${store.getState().oidc.user.id_token}`,
        'AccessToken': store.getState().oidc.user.access_token
      },
      data: sale
    }
  }
})