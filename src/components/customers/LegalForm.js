import React, { Component } from 'react'
import Customer from '../sales/Customer'

class LegalForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goBack: false
        }
    }

    handleGoBackLegalForm(event) {
        this.setState({ goBack: true })
    }

    render() {
        return (
            <form className="col-sm-12">
                {this.state.goBack === false &&
                    <div>
                        <h2 className="h2">Cadastrar Cliente - Pessoa Juridíca</h2>
                        <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-start " />
                        <h5 className="h5 mt-4">Informações da Empresa</h5>
                        <div className="row">
                            <div className="col-sm-12">
                                <input type="text" className="form-control" placeholder="Razão Social" />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-sm-4">
                                <input type="text" className="form-control" placeholder="Cnpj" />
                            </div>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" placeholder="Inscrição Estadual" />
                            </div>

                        </div>

                        <h5 className="h5 mt-4">Informações de Contato</h5>
                        <div className="row mt-2">
                            <div className="col-sm-2">
                                <input type="text" className="form-control" placeholder="DDD" />
                            </div>
                            <div className="col-sm-2">
                                <input type="text" className="form-control" placeholder="Telefone" />
                            </div>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" placeholder="Email" />
                            </div>
                        </div>

                        <h5 className="h5 mt-4">Endereço Fiscal</h5>
                        <div className="row mt-2">
                            <div className="col-sm-2">
                                <input type="text" className="form-control" placeholder="Cep" />
                            </div>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" placeholder="Logradouro" />
                            </div>
                            <div className="col-sm-2">
                                <input type="text" className="form-control" placeholder="Numero" />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-2">
                                <input type="text" className="form-control" placeholder="Complemento" />
                            </div>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" placeholder="Bairro" />
                            </div>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" placeholder="Cidade" />
                            </div>
                            <div className="col-sm-2">
                                <select className="custom-select">
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
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary mt-5 float-right">Salvar</button>
                        <button onClick={this.handleGoBackLegalForm.bind(this)} type="button" className="btn btn-primary mt-5 mr-2 float-right">Voltar</button>
                    </div>
                }
                {this.state.goBack === true && <Customer />}
            </form>
        )
    }
}

export default LegalForm