import { store } from '../store'

export const fetchAllAppointments = () => ({
  type: 'FETCH_ALL_APPOINTMENTS',
  payload: {
    request: {
      url: `/sales-pipelines/appointments`,
      headers: {
        'Authorization': `Bearer ${store.getState().oidc.user.id_token}`,
        'AccessToken': store.getState().oidc.user.access_token
      }
    }
  }
})