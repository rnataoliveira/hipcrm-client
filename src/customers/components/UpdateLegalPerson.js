import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { updateCustomer, fetchCustomer } from '../actions';

class UpdateLegalPerson extends Component {
  state = {
    customerId: '',
    companyName: '',
    companyRegistration: '',
    stateRegistration: '',
    phone: {
      areaCode: '',
      number: ''
    },
    email: '',
    address: {
      zipCode: '',
      street: '',
      number: '',
      neighborhood: '',
      city: '',
      state: '',
      complement: '',
    },
    notes: ''
  }

  componentDidMount() {
    const { id: customerId } = this.props.match.params
    this.props.fetchCustomer(customerId)
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Call getDerivedStateFromProps:', props, state)
    return {
      ...props.customer.personalData,
      customerId: props.customer.id,
      notes: props.customer.notes,
      updated: props.customer.updated
    }
  }

  handleChangeCompanyName(event) {
    this.setState({
      companyName: event.target.value
    })
  }

  handleChangeCompanyRegistration(event) {
    this.setState({
      companyRegistration: event.target.value
    })
  }

  handleChangeStateRegistration(event) {
    this.setState({
      stateRegistration: event.target.value
    })
  }

  handleChangePhoneAreaCode(event) {
    this.setState({
      phone: {
        ...this.state.phone,
        areaCode: event.target.value
      }
    })
  }

  handleChangePhoneNumber(event) {
    this.setState({
      phone: {
        ...this.state.phone,
        number: event.target.value
      }
    })
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  handleChangeZipCode(event) {
    this.setState({
      address: {
        ...this.state.address,
        zipCode: event.target.value
      }
    })
  }

  handleChangeStreet(event) {
    this.setState({
      address: {
        ...this.state.address,
        street: event.target.value
      }
    })
  }

  handleChangeNumber(event) {
    this.setState({
      address: {
        ...this.state.address,
        number: event.target.value
      }
    })
  }

  handleChangeNeighborhood(event) {
    this.setState({
      address: {
        ...this.state.address,
        neighborhood: event.target.value
      }
    })
  }

  handleChangeCity(event) {
    this.setState({
      address: {
        ...this.state.address,
        city: event.target.value
      }
    })
  }

  handleChangeState(event) {
    this.setState({
      address: {
        ...this.state.address,
        state: event.target.value
      }
    })
  }

  handleChangeComplement(event) {
    this.setState({
      address: {
        ...this.state.address,
        complement: event.target.value
      }
    })
  }

  handleChangeNotes(event) {
    this.setState({
      notes: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.updateCustomerLegalPerson(this.state)
  }

  render() {
    const customer = this.state

    if (customer.updated)
      return <Redirect to='/customers' />

    return (
      <div>
        <h5 className="h5 mt-4">Informações da Empresa</h5>
        <div className="row mt-2">
          <div className="col-12">
            <label htmlFor="companyName">Nome da Empresa</label>
            <input className="form-control" onChange={this.handleChangeCompanyName.bind(this)} value={this.state.companyName} />
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-4">
            <label htmlFor="companyRegistration">Cnpj</label>
            <input className="form-control" onChange={this.handleChangeCompanyRegistration.bind(this)} value={this.state.companyRegistration} />
          </div>
          <div className="col-8">
            <label htmlFor="stateRegistration">Inscrição Estadual</label>
            <input className="form-control" onChange={this.handleChangeStateRegistration.bind(this)} value={this.state.stateRegistration} />
          </div>
        </div>

        <h5 className="h5 mt-4">Informações de Contato</h5>
        <div className="row mt-2">
          <div className="col-sm-1">
            <label htmlFor="inputhoneAreaCode">DDD</label>
            <input className="form-control" onChange={this.handleChangePhoneAreaCode.bind(this)} value={this.state.phone.areaCode} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="inputhoneNumber">Telefone</label>
            <input className="form-control" onChange={this.handleChangePhoneNumber.bind(this)} value={this.state.phone.number} />
          </div>
          <div className={'col-sm-9'}>
            <label htmlFor="email">E-mail</label>
            <input className="form-control" onChange={this.handleChangeEmail.bind(this)} value={this.state.email} />
          </div>
        </div>

        <h5 className="h5 mt-4">Endereço</h5>
        <div className="row mt-2">
          <div className="col-sm-2">
            <label htmlFor="zipCode">Cep</label>
            <input className="form-control" onChange={this.handleChangeZipCode.bind(this)} value={this.state.address.zipCode} />
          </div>
          <div className="col-sm-8">
            <label htmlFor="street">Logradouro</label>
            <input className="form-control" onChange={this.handleChangeStreet.bind(this)} value={this.state.address.street} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="number">Número</label>
            <input className="form-control" onChange={this.handleChangeNumber.bind(this)} value={this.state.address.number} />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-6">
            <label htmlFor="neighborhood">Bairro</label>
            <input className="form-control" onChange={this.handleChangeNeighborhood.bind(this)} value={this.state.address.neighborhood} />
          </div>
          <div className="col-sm-4">
            <label htmlFor="city">Cidade</label>
            <input className="form-control" onChange={this.handleChangeCity.bind(this)} value={this.state.address.city} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="state">Estado</label>
            <input className="form-control" onChange={this.handleChangeState.bind(this)} value={this.state.address.state} />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-12">
            <label htmlFor="complement">Complemento</label>
            <input className="form-control" onChange={this.handleChangeComplement.bind(this)} value={this.state.address.complement} />
          </div>
        </div>

        <h5 className="h5 mt-4">Observações</h5>
        <div className="row mt-2">
          <div className="col-sm-12">
            <input className="form-control" onChange={this.handleChangeNotes.bind(this)} value={this.state.notes} />
          </div>
        </div>

        <button onClick={this.handleSubmit.bind(this)} type="submit" className="btn btn-primary mt-5 float-right">Salvar</button>
        <Link to='/customers' className="btn btn-primary mt-5 mr-2 float-right">Voltar</Link>
      </div>
    ) || null
  }
}

UpdateLegalPerson.propTypes = {
  // customer: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  customer: state.customers.customer
})

const mapDispatchToProps = dispatch => ({
  fetchCustomer: id => dispatch(fetchCustomer(id)),
  updateCustomerLegalPerson: (customer) => dispatch(updateCustomer(customer, 'legal-person'))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateLegalPerson)