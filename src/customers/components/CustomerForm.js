import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PhysicalPersonForm from './PhysicalPersonForm'
import LegalPersonForm from './LegalPersonForm'
import AddressForm from './AddressForm'
import ContactForm from './ContactForm'

import {connect} from 'react-redux'

class CustomerForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: ''
    }
  }

  handleChangeNotes(event) {
    this.setState({
      notes: event.target.value
    })
  }

  render() {
    return this.props.customer &&
      <div>
        <div>
          <div className="row">
            <h2 className="h2 mt-4 col-s4">Cliente - {this.props.customer.type === 'PhysicalPerson' ? 'Pessoa Fisíca' : 'Pessoa Jurídica'} </h2>
          </div>
          <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-start " />
          {this.props.customer.type === 'PhysicalPerson' && <PhysicalPersonForm personalData={this.props.customer.personalData || null} />}
          {this.props.customer.type === 'LegalPerson' && <LegalPersonForm personalData={this.props.customer.personalData || null} />}
          <ContactForm {...this.props.customer.personalData} />
          <AddressForm address={this.props.customer.personalData.address} />
          <h5 className="h5 mt-4">Observações</h5>
          <div className="row mt-2">
            <div className="col-sm-12">
              <input className="form-control" onChange={this.handleChangeNotes.bind(this)} value={this.state.notes} placeholder={this.props.customer.notes}/>
            </div>
          </div>
          {this.props.children}
        </div>
      </div> || null
  }
}

CustomerForm.propTypes = {
  customer: PropTypes.object,
  children: PropTypes.object,
  selectCustomerType: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  notes: state.notes,
})

export default connect(mapStateToProps)(CustomerForm)