import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { updateCustomer, fetchCustomer } from '../actions';

class UpdatePhysicalPerson extends Component {
  state = {
    customerId: '',
    firstName: '',
    surname: '',
    documentNumber: '',
    generalRegistration: '',
    birthDate: '',
    age: '',
    sex: '',
    maritalState: '',
    cellPhone: {
      areaCode: '',
      number: '',
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

  handleChangeBirthDate(event) {
    this.setState({
      birthDate: event.target.value
    })
  }

  handleChangeSex(event) {
    this.setState({
      sex: event.target.value
    })
  }

  handleChangeAge(event) {
    this.setState({
      age: event.target.value
    })
  }

  handleChangeMaritalState(event) {
    this.setState({
      maritalState: event.target.value
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

  handleChangeCellPhoneAreaCode(event) {
    this.setState({
      cellPhone: {
        ...this.state.phone,
        areaCode: event.target.value
      }
    })
  }

  handleChangeCellPhoneNumber(event) {
    this.setState({
      cellPhone: {
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
    this.props.updateCustomerPhysicalPerson(this.state)
  }

  render() {
    const customer = this.state

    if (customer.updated)
      return <Redirect to='/customers' />

    return (
      <div>
        <h5 className="h5 mt-4">Informações Pessoais</h5>

        <div className="row mt-2">
          <div className="col-sm-6">
            <label htmlFor="firstName">Nome</label>
            <input className="form-control" onChange={this.handleChangeFirstName.bind(this)} value={this.state.firstName} />
          </div>
          <div className="col-sm-6">
            <label htmlFor="surname">Sobrenome</label>
            <input className="form-control" onChange={this.handleChangeSurname.bind(this)} value={this.state.surname} />
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-sm-2">
            <label htmlFor="documentNumber">Cpf</label>
            <input className="form-control" onChange={this.handleChangeDocumentNumber.bind(this)} value={this.state.documentNumber} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="generalRegistration">Rg</label>
            <input className="form-control" onChange={this.handleChangeGeneralRegistration.bind(this)} value={this.state.generalRegistration} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="birthDate">Data de Nascimento</label>
            <input className="form-control"
              onChange={this.handleChangeBirthDate.bind(this)}
              value={moment(this.state.birthDate).format('MM.DD.YYYY')}
            />
          </div>
          <div className="col-sm-2">
            <label htmlFor="age">Idade</label>
            <input className="form-control" onChange={this.handleChangeAge.bind(this)} value={this.state.age} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="sex">Sexo</label>
            <input className="form-control" onChange={this.handleChangeSex.bind(this)} value={this.state.sex} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="maritalState">Estado Civil</label>
            <input className="form-control" onChange={this.handleChangeMaritalState.bind(this)} value={this.state.maritalState} />
          </div>
        </div>

        <h5 className="h5 mt-4">Informações de Contato</h5>
        <div className="row mt-2">
          <div className="col-sm-1">
            <label htmlFor="inputCellPhoneAreaCode">DDD</label>
            <input className="form-control" onChange={this.handleChangeCellPhoneAreaCode.bind(this)} value={this.state.cellPhone.areaCode} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="inputCellPhoneNumber">Celular</label>
            <input className="form-control" onChange={this.handleChangeCellPhoneNumber.bind(this)} value={this.state.cellPhone.number} />
          </div>
          <div className="col-sm-1">
            <label htmlFor="inputPhoneAreaCode">DDD</label>
            <input className="form-control" onChange={this.handleChangePhoneAreaCode.bind(this)} value={this.state.phone.areaCode} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="inputPhoneNumber">Telefone</label>
            <input className="form-control" onChange={this.handleChangePhoneNumber.bind(this)} value={this.state.phone.number} />
          </div>
          <div className={'col-sm-6'}>
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
    )
  }
}

UpdatePhysicalPerson.propTypes = {
  // personalData: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  customer: state.customers.customer
})

const mapDispatchToProps = dispatch => ({
  fetchCustomer: id => dispatch(fetchCustomer(id)),
  updateCustomerPhysicalPerson: (customer) => dispatch(updateCustomer(customer, 'physical-person'))
})


export default connect(mapStateToProps, mapDispatchToProps)(UpdatePhysicalPerson)