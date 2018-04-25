import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class PersonForm extends Component {
    constructor(props) {
        super(props)
    }

    handleGoBack(event) {
        this.props.history.push("/sales/new/customer");
    }

    render() {
        return (
            <form>
                <h2 className="h2">Cadastrar Cliente - Pessoal Física</h2>
                <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-start " />
                <h5 className="h5 mt-4">Informações Pessoais</h5>
                <div className="row">
                    <div className="col-sm-6">
                        <input type="text" className="form-control" placeholder="Nome" />
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" placeholder="Sobrenome" />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-2">
                        <input type="text" className="form-control" placeholder="Cpf" />
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" placeholder="Rg" />
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" placeholder="DD/MM/AAAA" />
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" placeholder="Idade" />
                    </div>
                    <div className="col-sm-2">
                        <select className="custom-select">
                            <option selected>Sexo</option>
                            <option value="1">Feminino</option>
                            <option value="2">Masculino</option>
                        </select>
                    </div>
                    <div className="col-sm-2">
                        <select className="custom-select">
                            <option selected>Estado Civil</option>
                            <option value="1">Solteiro</option>
                            <option value="2">União Estável</option>
                            <option value="3">Casado</option>
                            <option value="4">Divorciado</option>
                            <option value="5">Viúvo</option>
                        </select>
                    </div>
                </div>
                <h5 className="h5 mt-4">Informações de Contato</h5>
                <div className="row mt-2">
                    <div className="col-sm-1">
                        <input type="text" className="form-control" placeholder="DDD" />
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" placeholder="Telefone" />
                    </div>
                    <div className="col-sm-1">
                        <input type="text" className="form-control" placeholder="DDD" />
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" placeholder="Celular" />
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" placeholder="Email" />
                    </div>
                </div>

                <h5 className="h5 mt-4">Endereço</h5>
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
                <button onClick={this.handleGoBack.bind(this)} type="button" className="btn btn-primary mt-5 mr-2 float-right">Voltar</button>
            </form>
        )
    }
}
export default PersonForm