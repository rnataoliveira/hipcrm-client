import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'

import { searchCustomers, customerSelected } from '../actions'

class CustomerSearchContainer extends Component {
  static propTypes = {
    searchCustomers: PropTypes.func.isRequired,
    customerSelected: PropTypes.func.isRequired,
    customerSearch: PropTypes.array.isRequired
  }

  state = { isLoading: false }

  render() {
    return (
      <AsyncTypeahead
        className='col-4'
        labelKey='name'
        placeholder='Buscar um cliente existente'
        isLoading={this.state.isLoading}
        onSearch={q => this.props.searchCustomers(q, this.props.accessToken)}
        onChange={this.props.customerSelected}
        options={this.props.customerSearch}
      />
    )
  }
}

const mapStateToProps = state => ({
  customerSearch: state.salesPipeline.customerSearch,
  accessToken: state.oidc.user && state.oidc.user.id_token
})

const mapDispatchToProps = dispatch => ({
  searchCustomers: (q, accessToken) => dispatch(searchCustomers(q, accessToken)),
  customerSelected: customer => dispatch(customerSelected(customer))
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSearchContainer)