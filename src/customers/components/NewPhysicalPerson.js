import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { createCustomer } from '../actions'
import moment from 'moment'
import { flashMessage } from '../../flash-messages/actions'


class NewPhysicalPerson extends Component {
  state = {
    firstName: '',
    surname: '',
    documentNumber: '',
    generalRegistration: '',
    birthDate: '',
    sex: '',
    maritalState: '',
    cellPhone: {
      areaCode: '',
      number: ''
    },
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

  handleChangeFirstName(event) {
    this.setState({
      firstName: event.target.value
    })
  }

  handleChangeSurname(event) {
    this.setState({
      surname: event.target.value
    })
  }

  handleChangeDocumentNumber(event) {
    this.setState({
      documentNumber: event.target.value
    })
  }

  handleChangeGeneralRegistration(event) {
    this.setState({
      generalRegistration: event.target.value
    })
  }

  handleChangeBirthDate = (event) => this.setState({ birthDate: moment(event.target.value).toDate() })

  handleChangeSex = (event) => this.setState({ sex: event.target.value })

  handleChangeMaritalState(event) {
    this.setState({
      maritalState: event.target.value
    })
  }

  handleChangeCellPhoneAreaCode(event) {
    this.setState({
      cellPhone: {
        ...this.state.cellPhone,
        areaCode: event.target.value
      }
    })
  }

  handleChangeCellPhoneNumber(event) {
    this.setState({
      cellPhone: {
        ...this.state.cellPhone,
        number: event.target.value
      }
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
    console.info(this.state)
    this.props.createCustomerPhysicalPerson(this.state)
  }

  render() {
    return this.props.customerId ?
      <Redirect to={`/customers/${this.props.customerId}`} />
      :
      (
        <form className="col-sm-12 text-left">
          <div>
            <h2 className="h2">Cadastrar Cliente - Pessoal Física</h2>
            <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-start " />
            <h5 className="h5 mt-4">Informações Pessoais</h5>
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="firstName">Nome</label>
                <input type="text" className="form-control" placeholder="Nome" value={this.state.firstName} onChange={this.handleChangeFirstName.bind(this)} />
              </div>
              <div className="col-sm-6">
                <label htmlFor="surname">Sobrenome</label>
                <input type="text" className="form-control" placeholder="Sobrenome" value={this.state.surname} onChange={this.handleChangeSurname.bind(this)} />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-sm-3">
                <label htmlFor="documentNumber">Cpf</label>
                <input type="text" className="form-control" placeholder="Cpf" value={this.state.documentNumber} onChange={this.handleChangeDocumentNumber.bind(this)} />
              </div>
              <div className="col-sm-2">
                <label htmlFor="generalRegistration">Rg</label>
                <input type="text" className="form-control" placeholder="Rg" value={this.state.generalRegistration} onChange={this.handleChangeGeneralRegistration.bind(this)} />
              </div>
              <div className="col-sm-3">
                <label htmlFor="birthDate">Data de Nascimento</label>
                <input type="date" className="form-control" value={moment(this.state.birthDate).format('YYYY-MM-DD')} onChange={this.handleChangeBirthDate.bind(this)} />
              </div>
              <div className="col-sm-2">
                <label htmlFor="sex">Sexo</label>
                <select className="custom-select" value={this.state.sex} onChange={this.handleChangeSex.bind(this)}>
                  <option>Sexo</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Masculino">Masculino</option>
                </select>
              </div>
              <div className="col-sm-2">
                <label htmlFor="maritalState">Estado Civil</label>
                <select className="custom-select" value={this.state.maritalState} onChange={this.handleChangeMaritalState.bind(this)}>
                  <option>Estado Civil</option>
                  <option value="Solteiro">Solteiro</option>
                  <option value="União Estável">União Estável</option>
                  <option value="Casado">Casado</option>
                  <option value="Divorciado">Divorciado</option>
                  <option value="Viúvo">Viúvo</option>
                </select>
              </div>
            </div>
            <h5 className="h5 mt-4">Informações de Contato</h5>
            <div className="row mt-2">
              <div className="col-sm-1">
                <label htmlFor="phoneAreaCode">DDD</label>
                <input type="text" className="form-control" placeholder="DDD" value={this.state.phone.areaCode} onChange={this.handleChangePhoneAreaCode.bind(this)} />
              </div>
              <div className="col-sm-2">
                <label htmlFor="phoneNumber">Telefone</label>
                <input type="text" className="form-control" placeholder="Telefone" value={this.state.phone.number} onChange={this.handleChangePhoneNumber.bind(this)} />
              </div>
              <div className="col-sm-1">
                <label htmlFor="cellPhoneAreaCode">DDD</label>
                <input type="text" className="form-control" placeholder="DDD" value={this.state.cellPhone.areaCode} onChange={this.handleChangeCellPhoneAreaCode.bind(this)} />
              </div>
              <div className="col-sm-2">
                <label htmlFor="cellPhoneNumber">Celular</label>
                <input type="text" className="form-control" placeholder="Celular" value={this.state.cellPhone.number} onChange={this.handleChangeCellPhoneNumber.bind(this)} />
              </div>
              <div className="col-sm-6">
                <label htmlFor="email">E-mail</label>
                <input type="text" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleChangeEmail.bind(this)} />
              </div>
            </div>

            <h5 className="h5 mt-4">Endereço</h5>
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

NewPhysicalPerson.propTypes = {
  // customer: PropTypes.object
}

const mapStateToProps = state => ({
  customerId: state.customers.customer.customerId
})

const mapDispatchToProps = dispatch => ({
  createCustomerPhysicalPerson: (customer) => dispatch(createCustomer(customer, 'physical-person')),
  displaySuccess: () => dispatch(flashMessage({ text: 'Cliente Cadastrado!' }))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewPhysicalPerson)