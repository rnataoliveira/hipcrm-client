import React, { Component } from 'react'
import { flashMessage } from '../../flash-messages/actions'
import { connect } from 'react-redux'
import { saveAgreement } from '../actions';

class NewAgreementPhysicalPerson extends Component {
  state = {
    agreementNumber: '',
    plan: '',
    phone: {
      areaCode: '',
      number: ''
    },
    dependents: [],
    comission: 0,
    totalValue: 0,
    entranceFee: 0,
    installmentAmount: 0,
    installmentValue: 0,
    notes: ''

  }
  componentWillUnmount() {
    this.props.agreementId && this.props.displaySuccess()
  }

  handleAddMoreDependents(event) {
    this.setState({
      dependents: [...this.state.dependent, {
        name: null, documentNumber: null, generalRegistration: null, birthDate: null,
        mothersName: null, maritalState: null, relationship: null
      }]
    })
  }

  handleChangeAgreementNumber(event) {
    this.setState({
      agreementNumber: event.target.value
    })
  }

  handleChangePlan(event) {
    this.setState({
      plan: event.target.value
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

  handleChangeDependentsName(event, index) {
    this.setState({
      beneficiaries: this.state.beneficiaries.map((b, idx) => {
        if(idx !== index) return b

        return { ...b, name: event.target.value }
      })
    })
  }

  handleChangeDependentsDocumentNumber(event, index) {
    this.setState({
      beneficiaries: this.state.beneficiaries.map((b, idx) => {
        if(idx !== index) return b

        return { ...b, documentNumber: event.target.value }
      })
    })
  }

  handleChangeDependentsGeneralRegistration(event, index) {
    this.setState({
      beneficiaries: this.state.beneficiaries.map((b, idx) => {
        if(idx !== index) return b

        return { ...b, generalRegistration: event.target.value }
      })
    })
  }

  handleChangeDependentsBirthDate(event, index) {
    this.setState({
      beneficiaries: this.state.beneficiaries.map((b, idx) => {
        if(idx !== index) return b

        return { ...b, birthDate: event.target.value }
      })
    })
  }

  handleChangeDependentsMothersName(event, index) {
    this.setState({
      beneficiaries: this.state.beneficiaries.map((b, idx) => {
        if(idx !== index) return b

        return { ...b, mothersName: event.target.value }
      })
    })
  }

  handleChangeDependentsMaritalState(event, index) {
    this.setState({
      beneficiaries: this.state.beneficiaries.map((b, idx) => {
        if(idx !== index) return b

        return { ...b, maritalState: event.target.value }
      })
    })
  }

  handleChangeDependentsRelationShip(event, index) {
    this.setState({
      beneficiaries: this.state.beneficiaries.map((b, idx) => {
        if(idx !== index) return b

        return { ...b, relationship: event.target.value }
      })
    })
  }

  handleChangeTotalValue(event) {
    this.handleinstallmentValue()
    this.setState({
      totalValue: event.target.value
    })
  }

  handleChangeEntranceFee(event) {
    this.handleinstallmentValue()
    this.setState({
      entranceFee: event.target.value
    })
  }

  handleChangeInstallmentAmount(event) {
    this.handleinstallmentValue()
    this.setState({
      installmentAmount: event.target.value
    })
  }

  handleinstallmentValue() {
    const total = this.state.totalValue
    const entrance = this.state.entranceFee
    const installment = this.state.installmentAmount
    const totalMinuEntrance = total - entrance
    this.setState({
      installmentValue: (totalMinuEntrance / installment).toString()
    })
  }

  handleChangeComission(event) {
    this.setState({
      comission: event.target.value
    })
  }

  handleChangeNotes(event) {
    this.setState({
      notes: event.target.value
    })
  }

  handleSubmit() {
    this.props.agreementId && this.props.saveAgreementPhysicalPerson()
  }

  render() {
    return (
      <form className="mt-2">
        <h2 className="h2">Contrato - Pessoa Fisíca</h2>
        <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-start " />
        <div className="row">
          <div className="col-sm-4">
            <label htmlFor="agreementNumber">Número do Contrato</label>
            <input onChange={this.handleChangeAgreementNumber.bind(this)} value={this.state.agreementNumber} type="text" className="form-control" placeholder="Número do Contrato" />
          </div>
        </div>
        <hr />
        <h5 className="h5 mt-4">Dados do Plano</h5>
        <div className="row">
          <div className="col-sm-8">
            <label htmlFor="plan">Plano</label>
            <input onChange={this.handleChangePlan.bind(this)} value={this.state.plan} type="text" className="form-control" placeholder="Plano Contratado" />
          </div>
          <div className="col-sm-2">
            <label htmlFor="phoneAreaCode">DDD</label>
            <input onChange={this.handleChangePhoneAreaCode.bind(this)} value={this.state.phone.areaCode} type="text" className="form-control" placeholder="DDD" />
          </div>
          <div className="col-sm-2">
            <label htmlFor="phoneNumber">Telefone</label>
            <input onChange={this.handleChangePhoneNumber.bind(this)}  value={this.state.phone.number} type="text" className="form-control" placeholder="Telefone do Plano" />
          </div>
        </div>

        <h5 className="h5 mt-4">Dependentes</h5>
        {this.state.dependents.map((d, index) => (
          <div className="mt-2" key={index}>
            <div className="row mt-2">
              <div className="col-sm-6">
                <label htmlFor="dependentName">Nome</label>
                <input onChange={(e) => this.handleChangeDependentsName(e, index)} value={d.name} type="text" className="form-control" placeholder="Nome do Dependente" />
              </div>
              <div className="col-sm-2">
                <label htmlFor="dependentDocumentNumber">Cpf</label>
                <input onChange={(e) => this.handleChangeDependentsDocumentNumber(e, index)} value={d.documentNumber} type="text" className="form-control" placeholder="Cpf" />
              </div>
              <div className="col-sm-2">
                <label htmlFor="dependentGeneralRegistration">Rg</label>
                <input onChange={(e) => this.handleChangeDependentsGeneralRegistration(e, index)} value={d.generalRegistration} type="text" className="form-control" placeholder="Rg" />
              </div>
              <div className="col-sm-2">
                <label htmlFor="dependentBirthDate">Data de Nascimento</label>
                <input onChange={(e) => this.handleChangeDependentsBirthDate(e, index)}value={d.birthDate} type="text" className="form-control" placeholder="DD/MM/AAAA" />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-sm-7">
                <label htmlFor="dependentMothersName">Nome da Mãe</label>
                <input onChange={(e) => this.handleChangeDependentsMothersName(e, index)} value={d.mothersName} type="text" className="form-control" placeholder="Nome da Mãe" />
              </div>
              <div className="col-sm-2">
                <label htmlFor="dependentMaritalState">Estado Civil</label>
                <select onChange={(e) => this.handleChangeDependentsMaritalState(e, index)} className="custom-select" value={d.maritalState}>
                  <option selected>Estado Civil</option>
                  <option value="1">Solteiro</option>
                  <option value="2">União Estável</option>
                  <option value="3">Casado</option>
                  <option value="4">Divorciado</option>
                  <option value="5">Viúvo</option>
                </select>
              </div>
              <div className="col-sm-3">
                <label htmlFor="dependentRelationship">Parentesco</label>
                <input onChange={(e) => this.handleChangeDependentsRelationShip(e, index)} value={d.relationship} type="text" className="form-control" placeholder="Grau de Parentesco" />
              </div>
            </div>
          </div>
        ))}
        <div className="row mt-2">
          <div className="col-sm-12">
            <button onClick={this.handleAddMoreDependents.bind(this)} type="button" className="btn btn-primary float-right ">Mais Dependentes</button>
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
            <input readonly="readonly" type="text" className="form-control" placeholder="Valor da Parcela" value={this.state.installmentValue} />
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
  saveAgreementPhysicalPerson: (sale) => dispatch(saveAgreement(sale, 'physical-person')),
  displaySuccess: () => dispatch(flashMessage({ text: 'Contrato Salvo!' }))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewAgreementPhysicalPerson)