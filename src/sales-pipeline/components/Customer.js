import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
import CustomerSearchContainer from '../containers/CustomerSearchContainer'
import { CustomerDetailsContainer } from '../../customers'

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
      <div className="">
        <Switch>
          <Route exact path='/sales/new/customer' render={() => {
            return (<div className="col-12">
              <div className="col-lg-12 d-flex justify-content-center mb-5 mt-5">
                <CustomerSearchContainer />
              </div>
              <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-center " />
              <div className="col-lg-12 d-flex justify-content-center mb-5">
                <Link to='/sales/new/customer/new' className='btn btn-primary col-md-2 mt-5 ml-2 align-self-center'>Novo Cliente</Link>
              </div>
            </div>)
          }} />
          <Route path='/sales/new/customer/new' render={() => {
            return (<div className="col-12">
              Criar Novo Cliente
            </div>)
          }} />
          <Route path='/sales/new/customer/:customerId' component={CustomerDetailsContainer} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  accessToken: state.oidc.user && state.oidc.user.id_token,
  customer: state.salesPipeline.customer
})

export default connect(mapStateToProps)(Customer)