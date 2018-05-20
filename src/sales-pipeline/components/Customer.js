import React, { Component } from 'react'
import { connect } from 'react-redux'
import CustomerSearchContainer from '../containers/CustomerSearchContainer'

import CustomerTypeForm from '../../components/customers/CustomerTypeForm'

import 'react-bootstrap-typeahead/css/Typeahead.css'
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css'

class Customer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      operation: 'search',
      isLoading: false
    }
  }

  handleNewCustomer(event) {
    this.setState({
      operation: 'new-customer'
    })
  }

  render() {
    return (
      <div className="row">
        {this.state.operation === 'search' &&
          <div className="col-12">
            <div className="col-lg-12 d-flex justify-content-center mb-5 mt-5">
              <CustomerSearchContainer />
            </div>
            <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-center " />
            <div className="col-lg-12 d-flex justify-content-center mb-5">
              <button onClick={this.handleNewCustomer.bind(this)} className="btn btn-primary col-md-2 mt-5 ml-2 align-self-center" type="submit">Novo Cliente</button>
            </div>
          </div>}

        {this.state.operation === 'new-customer' && <CustomerTypeForm />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  accessToken: state.oidc.user && state.oidc.user.id_token
})

export default connect(mapStateToProps)(Customer)