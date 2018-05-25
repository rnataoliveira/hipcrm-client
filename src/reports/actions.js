import { store } from '../store'

export const fetchReport = (id) => ({
  type: 'FETCH_REPORT',
  payload: {
    request: {
      url: `/reports/${id}`,
      headers: {
        'Authorization': `Bearer ${store.getState().oidc.user.id_token}`
      }
    }
  }
})

export const fetchReports = () => ({
  type: 'FETCH_REPORTS',
  payload: {
    request: {
      url: `/reports`,
      headers: {
        'Authorization': `Bearer ${store.getState().oidc.user.id_token}`
      }
    }
  }
})

export const filterReports = q => ({
  type: 'FILTER_REPORTS',
  q
})