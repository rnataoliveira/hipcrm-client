import { createUserManager } from 'redux-oidc'

const config = {
  authority: 'https://accounts.google.com/.well-known/openid-configuration',
  client_id: '42472227382-lv313luvu3etp0ck6vnfv67jj06kilv0.apps.googleusercontent.com',
  scope: `profile email openid https://www.googleapis.com/auth/calendar`,
  response_type: 'token id_token',
  redirect_uri: 'http://localhost:3000/auth/callback'
}

export default createUserManager(config)