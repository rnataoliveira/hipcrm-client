import React, { Component } from 'react'
import { saveAgreement } from '../../sales-pipeline/actions';
import { flashMessage } from '../../flash-messages/actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class NewAgreementLegalPerson extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: '',
      notes: '',
      payment: {
        totalValue: 0,
        entranceFee: 0,
        installmentsCount: 0,
        comission: 0
      },
      phone: {
        areaCode: '',
        number: ''
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
      beneficiaries: [ {
        plan: '',
        number: ''
      } ],
      modality: 0,
      dentalCare: {
        plan: '',
        has: false
      }
    }
  }

  componentWillUnmount() {
    this.props.agreementId && this.props.displaySuccess()
  }

  handleChangeNumber(event) {
    this.setState({
      number: event.target.value
    })
  }

  handleChangeNotes(event) {
    this.setState({
      notes: event.target.value
    })
  }

  handleChangePaymentTotalValue(event) {
    this.setState({
      payment: {
        ...this.state.payment,
        totalValue: event.target.value
      }
    })
  }

  handleChangePaymentEntranceFee(event) {
    this.setState({
      payment: {
        ...this.state.payment,
        entranceFee: event.target.value
      }
    })
  }

  handleChangePaymentInstallmentCount(event) {
    this.setState({
      payment: {
        ...this.state.payment,
        installmentsCount: event.target.value
      }
    })
  }

  handleChangePaymentComission(event) {
    this.setState({
      payment: {
        ...this.state.payment,
        comission: event.target.value
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

  handleChangeContact(event) {
    this.setState({
      contact: event.target.value
    })
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  handleChangeAddressZipCode(event) {
    this.setState({
      mailingAddress: {
        ...this.state.mailingAddress,
        zipCode: event.target.value
      }
    })
  }

  handleChangeAddressStreet(event) {
    this.setState({
      mailingAddress: {
        ...this.state.mailingAddress,
        street: event.target.value
      }
    })
  }

  handleChangeAddressNumber(event) {
    this.setState({
      mailingAddress: {
        ...this.state.mailingAddress,
        number: event.target.value
      }
    })
  }

  handleChangeAddressNeighborhood(event) {
    this.setState({
      mailingAddress: {
        ...this.state.mailingAddress,
        neighborhood: event.target.value
      }
    })
  }

  handleChangeAddressCity(event) {
    this.setState({
      mailingAddress: {
        ...this.state.mailingAddress,
        city: event.target.value
      }
    })
  }

  handleChangeAddressState(event) {
    this.setState({
      mailingAddress: {
        ...this.state.mailingAddress,
        state: event.target.value
      }
    })
  }

  handleChangeAddressComplement(event) {
    this.setState({
      mailingAddress: {
        ...this.state.mailingAddress,
        complement: event.target.value
      }
    })
  }

  handleAddMoreBeneficiaries(event) {
    this.setState({
      beneficiaries: [...this.state.beneficiaries, { plan: '', number: '' }]
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
    if (event.target.value === 'true')
      this.setState({
        dentalCare: {
          ...this.state.dentalCare,
          has: true
        }
      })
    else if (event.target.value === 'false')
      this.setState({
        dentalCare: {
          has: false,
          plan: ''
        }
      })
  }

  handleChangeDentalCarePlan(event) {
    this.setState({
      dentalCare: {
        ...this.state.dentalCare,
        plan: event.target.value || ''
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { id: saleId } = this.props.match.params
    console.log(this.state)
    this.props.saveAgreementLegalPerson(this.state, saleId, 'legal-person')
  }

  render() {
    return (
      <form className="mt-2">
        <h2 className="h2">Contrato - Pessoa Juridíca</h2>
        <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-start " />
        <div className="row">
          <div className="col-sm-4">
            <label htmlFor="agreementNumber">Número do Contrato</label>
            <input onChange={this.handleChangeNumber.bind(this)} type="text" className="form-control" placeholder="Número do Contrato" value={this.state.agreementNumber} />
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
            <label htmlFor="contact">Contato da Empresa</label>
            <input onChange={this.handleChangeContact.bind(this)} type="text" className="form-control" placeholder="Contato" value={this.state.contact} />
          </div>
        </div>

        <h5 className="h5 mt-4">Endereço de Correspondência </h5>
        <span className="span" >Endereço para entrega de fatura e carteirinhas</span>
        <div className="row mt-2">
          <div className="col-sm-2">
            <label htmlFor="zipCode">Cep</label>
            <input onChange={this.handleChangeAddressZipCode.bind(this)} type="text" className="form-control" placeholder="Cep" value={this.state.mailingAddress.zipCode} />
          </div>
          <div className="col-sm-8">
            <label htmlFor="street">Logradouro</label>
            <input onChange={this.handleChangeAddressStreet.bind(this)} type="text" className="form-control" placeholder="Logradouro" value={this.state.mailingAddress.street} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="number">Número</label>
            <input onChange={this.handleChangeAddressNumber.bind(this)} type="text" className="form-control" placeholder="Numero" value={this.state.mailingAddress.number} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-2">
            <label htmlFor="complement">Complemento</label>
            <input onChange={this.handleChangeAddressComplement.bind(this)} type="text" className="form-control" placeholder="Complemento" value={this.state.mailingAddress.complement} />
          </div>
          <div className="col-sm-4">
            <label htmlFor="neighborhood">Bairro</label>
            <input onChange={this.handleChangeAddressNeighborhood.bind(this)} type="text" className="form-control" placeholder="Bairro" value={this.state.mailingAddress.neighborhood} />
          </div>
          <div className="col-sm-4">
            <label htmlFor="city">Cidade</label>
            <input onChange={this.handleChangeAddressCity.bind(this)} type="text" className="form-control" placeholder="Cidade" value={this.state.mailingAddress.city} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="state">Estado</label>
            <select onChange={this.handleChangeAddressState.bind(this)} className="custom-select" value={this.state.mailingAddress.state}>
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
          <div className="col-sm-4">
            <select onChange={this.handleChangeModality.bind(this)} className="custom-select" value={this.state.modality}>
              <option value={1}>Com Participação</option>
              <option value={0}>Sem Participação</option>
            </select>
          </div>
        </div>
        <h5 className="h5 mt-4">Contratação de Assistência Odontológica</h5>
        <div className="row mt-2">
          <div className="col-sm-2">
            <label htmlFor="dentalCarePlan">Contratar?</label>
            <select onChange={this.handleChangeDentalCare.bind(this)} className="custom-select" value={this.state.dentalCare.has}>
              <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </select>
          </div>
          {this.state.dentalCare.has && (
            <div className="col-sm-10">
              <label htmlFor="dentalCarePlan">Qual?</label>
              <input onChange={this.handleChangeDentalCarePlan.bind(this)} type="text" className="form-control" placeholder="Qual?" value={this.state.dentalCare.plan} />
            </div>
          )}
        </div>
        <h5 className="h5 mt-4">Controle de Pagamento do Contrato</h5>
        <div className="row mt-2">
          <div className="col-sm-2">
            <label htmlFor="totalValue">Total</label>
            <input onChange={this.handleChangePaymentTotalValue.bind(this)} type="text" className="form-control" placeholder="Valor Total do Plano" value={this.state.payment.totalValue} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="entranceFee">Entrada</label>
            <input onChange={this.handleChangePaymentEntranceFee.bind(this)} type="text" className="form-control" placeholder="Valor da Entrada" value={this.state.payment.entranceFee} />
          </div>
          <div className="col-sm-3">
            <label htmlFor="installmentAmount">Quantidade</label>
            <select onChange={this.handleChangePaymentInstallmentCount.bind(this)} className="custom-select" value={this.state.payment.installmentsCount}>
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
            <input readOnly="readonly" type="text" type="text" className="form-control" placeholder="Valor da Parcela" />
          </div>
          <div className="col-sm-3">
            <label htmlFor="comission">Comissão</label>
            <input onChange={this.handleChangePaymentComission.bind(this)} type="text" className="form-control" placeholder="Valor da Comissão" value={this.state.payment.comission} />
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

})

const mapDispatchToProps = dispatch => ({
  saveAgreementLegalPerson: (agreement, saleId) => dispatch(saveAgreement(agreement, saleId, 'legal-person')),
  displaySuccess: () => dispatch(flashMessage({ text: 'Contrato Salvo!' }))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewAgreementLegalPerson))