import React, { Component } from 'react'
import { saveAgreement } from '../actions';
import { flashMessage } from '../../flash-messages/actions'
import { connect } from 'react-redux'

class NewAgreementLegalPerson extends Component {
  state = {
    number: '',
    notes: '',
    payment: {
      comission: 0,
      totalValue: 0,
      entranceFee: 0,
      installmentAmount: 0,
      installmentValue: 0,
      notes: ''
    },
    phone: {
      areaCode: '',
      number: '',
    },
    email: '',
    contact: '',
    mailingAddress: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: ''
    },
    beneficiaries: [],
    modality: '',
    dentalCare: {
      plan: ''
    }
  }

  componentWillUnmount() {
    this.props.agreementId && this.props.displaySuccess()
  }

  handleAgreementChangeNumber(event) {
    this.setState({
      number: event.target.value
    })
  }

  handleChangeNotes(event) {
    this.setState({
      notes: event.target.value
    })
  }

  handleChangeTotalValue(event) {
    this.setState({
      payment: {
        ...this.state.payment,
        totalValue: event.target.value
      }
    })
    this.handleinstallmentValue()
  }

  handleChangeEntranceFee(event) {
    this.setState({
      payment: {
        ...this.state.payment,
        entranceFee: event.target.value
      }
    })
    this.handleinstallmentValue()
  }

  handleChangeInstallmentAmount(event) {
    this.setState({
      payment: {
        ...this.state.payment,
        installmentCount: event.target.value
      }
    })
    this.handleinstallmentValue()
  }

  handleChangeComission(event) {
    this.setState({
      payment: {
        ...this.state.payment,
        installmentCount: event.target.value
      }
    })
    this.handleinstallmentValue()
  }

  handleinstallmentValue() {
    const total = this.state.totalValue
    const entrance = this.state.entranceFee
    const installmentAmount = this.state.installmentAmount
    const totalMinuEntrance = total - entrance
    this.setState({
      payment: {
        ...this.state.payment,
        installmentValue: installmentAmount > 0 ? (total - entrance) / installmentAmount : 0
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

  handleChangeCompanyContact(event) {
    this.setState({
      companyContact: event.target.value
    })
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  handleChangeZipCode(event) {
    this.setState({
      mailingAddress: {
        ...this.state.mailingAddress,
        zipCode: event.target.value
      }
    })
  }

  handleChangeStreet(event) {
    this.setState({
      mailingAddress: {
        ...this.state.mailingAddress,
        street: event.target.value
      }
    })
  }

  handleChangeNumber(event) {
    this.setState({
      mailingAddress: {
        ...this.state.mailingAddress,
        number: event.target.value
      }
    })
  }

  handleChangeNeighborhood(event) {
    this.setState({
      mailingAddress: {
        ...this.state.mailingAddress,
        neighborhood: event.target.value
      }
    })
  }

  handleChangeCity(event) {
    this.setState({
      mailingAddress: {
        ...this.state.mailingAddress,
        city: event.target.value
      }
    })
  }

  handleChangeState(event) {
    this.setState({
      mailingAddress: {
        ...this.state.mailingAddress,
        state: event.target.value
      }
    })
  }

  handleChangeComplement(event) {
    this.setState({
      mailingAddress: {
        ...this.state.mailingAddress,
        complement: event.target.value
      }
    })
  }

  handleAddMoreBeneficiaries(event) {
    this.setState({
      beneficiaries: [...this.state.beneficiaries, { plan: null, number: null }]
    })
  }

  handleChangeBeneficiariesPlan(event, index) {
    this.setState({
      beneficiaries: this.state.beneficiaries.map((b, idx) => {
        if (idx !== index) return b

        return { ...b, plan: event.target.value }
      })
    })
  }

  handleChangeBeneficiariesNumber(event, index) {
    this.setState({
      beneficiaries: this.state.beneficiaries.map((b, idx) => {
        if (idx !== index) return b

        return { ...b, number: event.target.value }
      })
    })
  }

  handleChangeModality(event) {
    this.setState({
      modality: event.target.value
    })
  }

  handleChangeDentalCare(event) {
    this.setState({
      dentalCare: event.target.value
    })
  }

  handleChangeDentalCarePlan(event) {
    this.setState({
      dentalCare: {
        whichDentalCare: event.target.value
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state)
    // this.props.agreementId && this.props.saveAgreementLegalPerson()
  }

  render() {
    return (
      <form className="mt-2">
        <h2 className="h2">Contrato - Pessoa Juridíca</h2>
        <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-start " />
        <div className="row">
          <div className="col-sm-4">
            <label htmlFor="agreementNumber">Número do Contrato</label>
            <input onChange={this.handleAgreementChangeNumber.bind(this)} type="text" className="form-control" placeholder="Número do Contrato" value={this.state.agreementNumber} />
          </div>
        </div>
        <hr />

        <h5 className="h5 mt-4">Informações de Contato do Endereço de Correspondência</h5>
        <div className="row mt-2">
          <div className="col-sm-1">
            <label htmlFor="phoneAreaCode">DDD</label>
            <input onChange={this.handleChangePhoneAreaCode.bind(this)} type="text" className="form-control" placeholder="DDD" value={this.state.phone.areaCode} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="phoneNumber">Telefone</label>
            <input onChange={this.handleChangePhoneNumber.bind(this)} type="text" className="form-control" placeholder="Telefone" value={this.state.phone.number} />
          </div>
          <div className="col-sm-4">
            <label htmlFor="email">E-mail</label>
            <input onChange={this.handleChangeEmail.bind(this)} type="text" className="form-control" placeholder="E-mail" value={this.state.email} />
          </div>
          <div className="col-sm-5">
            <label htmlFor="companyContact">Contato da Empresa</label>
            <input onChange={this.handleChangeCompanyContact.bind(this)} type="text" className="form-control" placeholder="Contato da Empresa" value={this.state.companyContact} />
          </div>
        </div>

        <h5 className="h5 mt-4">Endereço de Correspondência </h5>
        <span className="span" >Endereço para entrega de fatura e carteirinhas</span>
        <div className="row mt-2">
          <div className="col-sm-2">
            <label htmlFor="zipCode">Cep</label>
            <input onChange={this.handleChangeZipCode.bind(this)} type="text" className="form-control" placeholder="Cep" value={this.state.mailingAddress.zipCode} />
          </div>
          <div className="col-sm-8">
            <label htmlFor="street">Logradouro</label>
            <input onChange={this.handleChangeStreet.bind(this)} type="text" className="form-control" placeholder="Logradouro" value={this.state.mailingAddress.street} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="number">Número</label>
            <input onChange={this.handleChangeNumber.bind(this)} type="text" className="form-control" placeholder="Numero" value={this.state.mailingAddress.number} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-2">
            <label htmlFor="complement">Complemento</label>
            <input onChange={this.handleChangeComplement.bind(this)} type="text" className="form-control" placeholder="Complemento" value={this.state.mailingAddress.complement} />
          </div>
          <div className="col-sm-4">
            <label htmlFor="neighborhood">Bairro</label>
            <input onChange={this.handleChangeNeighborhood.bind(this)} type="text" className="form-control" placeholder="Bairro" value={this.state.mailingAddress.neighborhood} />
          </div>
          <div className="col-sm-4">
            <label htmlFor="city">Cidade</label>
            <input onChange={this.handleChangeCity.bind(this)} type="text" className="form-control" placeholder="Cidade" value={this.state.mailingAddress.city} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="state">Estado</label>
            <select onChange={this.handleChangeState.bind(this)} className="custom-select" value={this.state.mailingAddress.state}>
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

        <h5 className="h5 mt-4">Beneficiários por plano</h5>
        {this.state.beneficiaries.map((b, index) => (
          <div className="row mt-2" key={index}>
            <div className="col-sm-4">
              <label htmlFor="beneficiariesNumber" name="number">Número</label>
              <input onChange={(e) => this.handleChangeBeneficiariesNumber(e, index)} value={b.number} type="text" className="form-control" placeholder="Número de Beneficiário" />
            </div>
            <div className="col-sm-8">
              <label htmlFor="beneficiariesPlan" name="plan">Plano</label>
              <input onChange={(e) => this.handleChangeBeneficiariesPlan(e, index)} value={b.plan} type="text" className="form-control" placeholder="Plano" />
            </div>
          </div>
        ))}
        <div className="row mt-2 d-flex justify-content-end">
          <div className="col-sm-2">
            <button onClick={this.handleAddMoreBeneficiaries.bind(this)} type="button" className="btn btn-primary float-right">Adicionar Beneficiários</button>
          </div>
        </div>

        <h5 className="h5 mt-4">Modalidade</h5>
        <div className="row mt-2">
          <div className="form-check form-check-inline m-2">
            <input onChange={this.handleChangeModality.bind(this)} className="form-check-input" type="radio" name="modality" id="exampleRadios1" value={this.state.modality} />
            <label className="form-check-label">
              Com Participação
            </label>
          </div>
          <div className="form-check form-check-inline m-2">
            <input onChange={this.handleChangeModality.bind(this)} className="form-check-input" type="radio" name="modality" id="exampleRadios2" value={this.state.modality} />
            <label className="form-check-label">
              Sem Participação
            </label>
          </div>
        </div>
        <h5 className="h5 mt-4">Contratação de Assistência Odontológica</h5>
        <div className="row mt-2">
          <div className="form-check form-check-inline m-2">
            <input onChange={this.handleChangeDentalCare.bind(this)} className="form-check-input" type="radio" name="dentalCare" id="exampleRadios1" value={this.state.dentalCare} />
            <label className="form-check-label">
              Sim
            </label>
          </div>
          <div className="form-check form-check-inline m-2">
            <input onChange={this.handleChangeDentalCare.bind(this)} className="form-check-input" type="radio" name="dentalCare" id="exampleRadios2" value={this.state.dentalCare} />
            <label className="form-check-label">
              Não
            </label>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-12">
            <label htmlFor="dentalCarePlan">Qual?</label>
            <input onChange={this.handleChangeDentalCarePlan.bind(this)} type="text" className="form-control" placeholder="Qual?" value={this.state.dentalCare.plan} />
          </div>
        </div>
        <h5 className="h5 mt-4">Controle de Pagamento do Contrato</h5>
        <div className="row mt-2">
          <div className="col-sm-2">
            <label htmlFor="totalValue">Total</label>
            <input onChange={this.handleChangeTotalValue.bind(this)} type="text" className="form-control" placeholder="Valor Total do Plano" value={this.state.totalValue} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="entranceFee">Entrada</label>
            <input onChange={this.handleChangeEntranceFee.bind(this)} type="text" className="form-control" placeholder="Valor da Entrada" value={this.state.entranceFee} />
          </div>
          <div className="col-sm-3">
            <label htmlFor="installmentAmount">Quantidade</label>
            <select onChange={this.handleChangeInstallmentAmount.bind(this)} className="custom-select" value={this.state.installmentAmount}>
              <option value="parcelas">Quantidade de Parcelas</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="col-sm-2">
            {/* (valor total - entrada) / parcelas*/}
            <label htmlFor="installmentValue">Parcela</label>
            <input readonly="readOnly" type="text" onChange={this.handleinstallmentValue.bind(this)} type="text" className="form-control" placeholder="Valor da Parcela" value={this.state.installmentValue} />
          </div>
          <div className="col-sm-3">
            <label htmlFor="comission">Comissão</label>
            <input onChange={this.handleChangeComission.bind(this)} type="text" className="form-control" placeholder="Valor da Comissão" value={this.state.comission} />
          </div>
        </div>
        <h5 className="h5 mt-4">Observações</h5>
        <div className="row mt-2">
          <div className="col-sm-12">
            <textarea onChange={this.handleChangeNotes.bind(this)} className="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.notes}></textarea>
          </div>
        </div>
        <button onClick={this.handleSubmit.bind(this)} type="submit" className="btn btn-primary mt-5 float-right">Salvar</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  customerId: state.customers.customer.customerId
})

const mapDispatchToProps = dispatch => ({
  saveAgreementLegalPerson: (sale) => dispatch(saveAgreement(sale, 'legal-person')),
  displaySuccess: () => dispatch(flashMessage({ text: 'Contrato Salvo!' }))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewAgreementLegalPerson)