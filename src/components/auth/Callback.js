import React from 'react'
import { connect } from 'react-redux'
import { CallbackComponent } from 'redux-oidc'
import { push } from 'react-router-redux'
import userManager from '../../modules/userManager'

const Callback = (props) => (
    <CallbackComponent
        userManager={userManager}
        successCallback={() => props.dispatch(push('/dashboard'))}
        errorCallback={error => {
            console.error(error)
        }}>
        <div>Redirecting...</div>
    </CallbackComponent>
)

export default connect()(Callback)