import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'

import CustomerTypeForm from '../customers/CustomerTypeForm'
import { searchCustomers } from '../../actions'

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

  onSearch(query) {
    this.props.searchCustomers(query, this.props.accessToken)
  }

  onChange(selected) {
    console.log(selected)
  }

  render() {
    return (
      <div className="row">
        {this.state.operation === 'search' &&
          <div className="col-12">
            <div className="col-lg-12 d-flex justify-content-center mb-5 mt-5">
              <AsyncTypeahead
                className='col-4'
                labelKey='name'
                placeholder='Buscar um cliente existente'
                isLoading={this.state.isLoading}
                onSearch={this.onSearch.bind(this)}
                onChange={this.onChange.bind(this)}
                options={this.props.customers}
              />
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
  customers: state.salesPipeline.customers,
  accessToken: state.oidc.user && state.oidc.user.id_token
})

const mapDispatchToProps = dispatch => ({
  searchCustomers: (q, accessToken) => dispatch(searchCustomers(q, accessToken))
})

export default connect(mapStateToProps, mapDispatchToProps)(Customer)