import React, { Component } from 'react'

const withGoogleClient = (WrappedComponent) =>
  class WithGoogleClient extends Component {

    constructor(props) {
      super(props)
      this.state = { gapiReady: false }
      window.onGload = this.handleGapiReady.bind(this)
    }

    handleGapiReady() {
      this.setState({ gapiReady: true })
    }

    componentDidMount() {
      const script = window.document.createElement('script')
      script.src = 'https://apis.google.com/js/client.js?onload=onGload'

      window.document.body.appendChild(script)
    }

    render() {
      return this.state.gapiReady ? <WrappedComponent /> : null
    }
  }


export default withGoogleClient