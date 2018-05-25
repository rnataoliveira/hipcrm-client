import React from 'react'
import PropTypes from 'prop-types'
import PhysicalPersonDetails from './PhysicalPersonDetails'
import LegalPersonDetails from './LegalPersonDetails'
import AddressDetails from './AddressDetails'
import ContactDetails from './ContactDetails'

const CustomerDetails = ({ customer, children }) => {
  const display = () => (
    <div>
      {customer.type === 'PhysicalPerson' && <PhysicalPersonDetails personalData={customer.personalData} />}
      {customer.type === 'LegalPerson' && <LegalPersonDetails personalData={customer.personalData} />}
      <ContactDetails {...customer.personalData} />
      <AddressDetails address={customer.personalData.address} />
      <h5 className="h5 mt-4">Observações</h5>
      <div className="row mt-2">
        <div className="col-sm-12">
          <p className="form-control">{customer.notes}</p>
        </div>
      </div>
      {children}
    </div>
  )

  return customer ? display() : null
}

CustomerDetails.propTypes = {
  customer: PropTypes.object,
  children:  PropTypes.object
}

export default CustomerDetails