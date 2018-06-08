import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class AddressForm extends Component {
  state = {
    zipCode: '',
    street: '',
    number: '',
    neighborhood: '',
    city: '',
    state: '',
    complement: ''
  }

  handleChangeZipCode(event) {
    this.setState({
      zipCode: event.target.value
    })
  }

  handleChangeStreet(event) {
    this.setState({
      street: event.target.value
    })
  }

  handleChangeNumber(event) {
    this.setState({
      number: event.target.value
    })
  }

  handleChangeNeighborhood(event) {
    this.setState({
      neighborhood: event.target.value
    })
  }

  handleChangeCity(event) {
    this.setState({
      city: event.target.value
    })
  }

  handleChangeState(event) {
    this.setState({
      state: event.target.value
    })
  }

  handleChangeComplement(event) {
    this.setState({
      complement: event.target.value
    })
  }

  render() {
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
            <input className="form-control" onChange={this.handleChangeZipCode.bind(this)} value={this.state.zipCode} placeholder={this.props.address.zipCode} />
          </div>
          <div className="col-sm-8">
            <input className="form-control" onChange={this.handleChangeStreet.bind(this)} value={this.state.street} placeholder={this.props.address.street} />
          </div>
          <div className="col-sm-2">
            <input className="form-control" onChange={this.handleChangeNumber.bind(this)} value={this.state.number}  placeholder={this.props.address.number}/>
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
            <input className="form-control" onChange={this.handleChangeNeighborhood.bind(this)} value={this.state.neighborhood}  placeholder={this.props.address.neighborhood}/>
          </div>
          <div className="col-sm-4">
            <input className="form-control" onChange={this.handleChangeCity.bind(this)} value={this.state.city}  placeholder={this.props.address.city} />
          </div>
          <div className="col-sm-2">
            <input className="form-control" onChange={this.handleChangeState.bind(this)} value={this.state.state}  placeholder={this.props.address.state}/>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-12">
            <label htmlFor="complement">Complemento</label>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-12">
            <input className="form-control" onChange={this.handleChangeComplement.bind(this)} value={this.state.complement}  placeholder={this.props.address.complement} />
          </div>
        </div>
      </div>
    )
  }
}

AddressForm.propTypes = {
  address: PropTypes.object
}

const mapStateToProps = state => ({
  zipCode: state.zipCode,
  street: state.street,
  number: state.number,
  neighborhood: state.neighborhood,
  city: state.city,
  state: state.state,
  complement: state.complement
})

export default connect(mapStateToProps)(AddressForm)