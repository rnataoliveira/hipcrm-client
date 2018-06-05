import React from 'react'
import PropTypes from 'prop-types'

const AddressDetails = ({ address }) => {
  return (
    <div>
      <h5 className="h5 mt-4">Endereço</h5>
      <div className="row mt-2">
        <div className="col-sm-2">
          <label htmlFor="zipCode">Cep</label>
        </div>
        <div className="col-sm-8">
          <label htmlFor="street">Logradouro</label>
        </div>
        <div className="col-sm-2">
          <label htmlFor="number">Número</label>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-sm-2">
          <p className="form-control">{address.zipCode ? address.zipCode : 'null'}</p>
        </div>
        <div className="col-sm-8">
          <p className="form-control">{address.street ? address.street : 'null'}</p>
        </div>
        <div className="col-sm-2">
          <p className="form-control">{address.number ? address.number : 'null'}</p>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-sm-6">
          <label htmlFor="neighborhood">Bairro</label>
        </div>
        <div className="col-sm-4">
          <label htmlFor="city">Cidade</label>
        </div>
        <div className="col-sm-2">
          <label htmlFor="state">Estado</label>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-sm-6">
          <p className="form-control">{address.neighborhood ? address.neighborhood : 'null'}</p>
        </div>
        <div className="col-sm-4">
          <p className="form-control">{address.city ? address.city : 'null'}</p>
        </div>
        <div className="col-sm-2">
          <p className="form-control">{address.state ? address.state : 'null'}</p>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-sm-12">
          <label htmlFor="complement">Complemento</label>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-sm-12">
          <p className="form-control" >{address.complement ? address.complement : 'null'}</p>
        </div>
      </div>
    </div>
  )
}

AddressDetails.propTypes = {
  address: PropTypes.object.isRequired
}

export default AddressDetails