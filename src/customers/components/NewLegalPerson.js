import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { createCustomer, newCustomerForm } from '../actions'
import { flashMessage } from '../../flash-messages/actions'

class NewLegalPerson extends Component {
  state = {
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

  componentWillUnmount() {
    this.props.customerId && this.props.displaySuccess()
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
    console.log(this.state)
    this.props.createCustomerLegalPerson(this.state)
    this.setState({
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
    })
  }

  render() {
    return this.props.customerId ?
      <Redirect to={`/customers/${this.props.customerId}`} />
      :
      (
        <form className="col-sm-12 text-left">
          <div>
            <h2 className="h2">Cadastrar Cliente - Pessoa Juridíca</h2>
            <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-start " />
            <h5 className="h5 mt-4">Informações da Empresa</h5>
            <div className="row">
              <div className="col-sm-12">
                <label htmlFor="companyName">Nome da Empresa</label>
                <input type="text" className="form-control" placeholder="Razão Social" value={this.state.companyName} onChange={this.handleChangeCompanyName.bind(this)} />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-sm-4">
                <label htmlFor="companyRegistration">Cnpj</label>
                <input type="text" className="form-control" placeholder="Cnpj" value={this.state.companyRegistration} onChange={this.handleChangeCompanyRegistration.bind(this)} />
              </div>
              <div className="col-sm-8">
                <label htmlFor="stateRegistration">Inscrição Estadual</label>
                <input type="text" className="form-control" placeholder="Inscrição Estadual" value={this.state.stateRegistration} onChange={this.handleChangeStateRegistration.bind(this)} />
              </div>

            </div>

            <h5 className="h5 mt-4">Informações de Contato</h5>
            <div className="row mt-2">
              <div className="col-sm-2">
                <label htmlFor="phoneAreaCode">DDD</label>
                <input type="text" className="form-control" placeholder="DDD" value={this.state.phone.areaCode} onChange={this.handleChangePhoneAreaCode.bind(this)} />
              </div>
              <div className="col-sm-2">
                <label htmlFor="phoneNumber">Telefone</label>
                <input type="text" className="form-control" placeholder="Telefone" value={this.state.phone.number} onChange={this.handleChangePhoneNumber.bind(this)} />
              </div>
              <div className="col-sm-8">
                <label htmlFor="email">E-mail</label>
                <input type="text" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleChangeEmail.bind(this)} />
              </div>
            </div>

            <h5 className="h5 mt-4">Endereço Fiscal</h5>
            <div className="row mt-2">
              <div className="col-sm-2">
                <label htmlFor="zipCode">Cep</label>
                <input type="text" className="form-control" placeholder="Cep" value={this.state.zipCode} onChange={this.handleChangeZipCode.bind(this)} />
              </div>
              <div className="col-sm-8">
                <label htmlFor="street">Logradouro</label>
                <input type="text" className="form-control" placeholder="Logradouro" value={this.state.street} onChange={this.handleChangeStreet.bind(this)} />
              </div>
              <div className="col-sm-2">
                <label htmlFor="number">Número</label>
                <input type="text" className="form-control" placeholder="Numero" value={this.state.number} onChange={this.handleChangeNumber.bind(this)} />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-sm-2">
                <label htmlFor="complement">Complemento</label>
                <input type="text" className="form-control" placeholder="Complemento" value={this.state.complement} onChange={this.handleChangeComplement.bind(this)} />
              </div>
              <div className="col-sm-4">
                <label htmlFor="neighborhood">Bairro</label>
                <input type="text" className="form-control" placeholder="Bairro" value={this.state.neighborhood} onChange={this.handleChangeNeighborhood.bind(this)} />
              </div>
              <div className="col-sm-4">
                <label htmlFor="city">Cidade</label>
                <input type="text" className="form-control" placeholder="Cidade" value={this.state.city} onChange={this.handleChangeCity.bind(this)} />
              </div>
              <div className="col-sm-2">
                <label htmlFor="state">Estado</label>
                <select className="custom-select" value={this.state.state} onChange={this.handleChangeState.bind(this)}>
                  <option value="UF">Estado</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </select>
              </div>
            </div>

            <h5 className="h5 mt-4">Observações</h5>
            <div className="row mt-2">
              <div className="col-sm-12">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.notes} onChange={this.handleChangeNotes.bind(this)}></textarea>
              </div>
            </div>

            <button type="submit" className="btn btn-primary mt-5 float-right" onClick={this.handleSubmit.bind(this)}>Salvar</button>
            <Link to="/customers/new" className="btn btn-primary mt-5 mr-2 float-right">Voltar</Link>
          </div>
        </form>
      )
  }
}

NewLegalPerson.propTypes = {
  // customer: PropTypes.object
}

const mapStateToProps = state => ({
  customerId: state.customers.customer.customerId
})

const mapDispatchToProps = dispatch => ({
  createCustomerLegalPerson: (customer) => dispatch(createCustomer(customer, 'legal-person')),
  displaySuccess: () => dispatch(flashMessage({ text: 'Cliente Cadastrado!' }))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewLegalPerson)