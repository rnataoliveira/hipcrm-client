import React from 'react'
import PropTypes from 'prop-types'

const AddressDetails = ({ address }) => {
  return (
    <div>
      <h5 className="h5 mt-4">Endereço</h5>
      <div className="row mt-2">
        <div className="col-sm-2">
          <p className="border-bottom">{address.zipCode}</p>
        </div>
        <div className="col-sm-8">
          <p className="border-bottom">{address.street}</p>
        </div>
        <div className="col-sm-2">
          <p className="border-bottom">{address.number}</p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-sm-6">
          <p className="border-bottom">{address.neighborhood}</p>
        </div>
        <div className="col-sm-4">
          <p className="border-bottom">{address.city}</p>
        </div>
        <div className="col-sm-2">
          <p className="border-bottom">{address.state}</p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-sm-12">
          <p className="border-bottom" >{address.complement}</p>
        </div>
      </div>
    </div>
  )
}

AddressDetails.propTypes = {
  address: PropTypes.object.isRequired
}

export default AddressDetails