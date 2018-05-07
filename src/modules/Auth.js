import React from 'react'
import { UserManager } from 'oidc-client'

export const createUserManager = () => {
    const userManager = new UserManager({
        authority: 'https://accounts.google.com/.well-known/openid-configuration',
        client_id: '42472227382-lv313luvu3etp0ck6vnfv67jj06kilv0.apps.googleusercontent.com',
        scope: `profile email openid https://www.googleapis.com/auth/calendar`,
        response_type: 'token id_token',
        redirect_uri: 'http://localhost:3000/login'
    })

    userManager.events.addUserLoaded(user => {
        console.log('User Loaded', user)
    })

    userManager.getUser()
        .then(user => {
            if(user) userManager.currentUser = user
        })

    return userManager
}

export const withUserManager = (WrappedComponent) => {
    const userManager = createUserManager()

    return props => <WrappedComponent {...props} userManager={userManager} />
}
