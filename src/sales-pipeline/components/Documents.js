import React, { Component } from 'react'
import withGoogleClient from '../../withGoogleClient'
import { connect } from 'react-redux'

class Documents extends Component {

  constructor(props) {
    super(props)
    this.state = ({
      picker: {}
    })
  }

  componentDidMount() {
    window.gapi.load('picker', () => {
      const uploadView = new window.google.picker.DocsUploadView()
      uploadView.setParent(this.props.folderId)
      
      const picker = new window.google.picker.PickerBuilder()
        .addView(uploadView)
        .setOAuthToken(this.props.oAuthToken)
        .setDeveloperKey('AIzaSyBjauEuKZPDHAO9G1C8QolA3ljnpUvXaXM')
        .build()

      this.setState({ picker })
    })
  }

  handlePicker() {
    const { picker } = this.state
    picker.setVisible(true)
  }

  render() {
    return (
      <div>
        <div className="custom-file d-flex justify-content-center ">
          <button type="button" className="btn btn-primary m-2 float-center" onClick={this.handlePicker.bind(this)}>Upload File</button>
        </div>
      </div >
    )
  }
}

const mapStateToProps = state => ({
  oAuthToken: state.oidc.user.access_token,
  folderId: state.salesPipeline.sale.folderId
})

export default withGoogleClient(connect(mapStateToProps)(Documents))