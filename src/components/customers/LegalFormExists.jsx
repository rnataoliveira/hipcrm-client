import React, { Component } from 'react'

class LegalFormExists extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form className="col-sm-12">
                <div>
                    <h2 className="h2">Cadastrar Cliente - Pessoa Juridíca</h2>
                    <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-start " />
                    <h5 className="h5 mt-4">Informações da Empresa</h5>
                    <div className="row">
                        <div className="col-sm-12">
                            <p className="border-bottom">Razão Social</p>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-sm-4">
                            <p className="border-bottom">Cnpj</p>
                        </div>
                        <div className="col-sm-8">
                            <p className="border-bottom">Inscrição Estadual</p>
                        </div>

                    </div>

                    <h5 className="h5 mt-4">Informações de Contato</h5>
                    <div className="row mt-2">
                        <div className="col-sm-2">
                            <p className="border-bottom" >011</p>
                        </div>
                        <div className="col-sm-2">
                            <p className="border-bottom" >95946-3856</p>
                        </div>
                        <div className="col-sm-8">
                            <p className="border-bottom">empresa@hotmail.com</p>
                        </div>
                    </div>

                    <h5 className="h5 mt-4">Endereço Fiscal</h5>
                    <div className="row mt-2">
                        <div className="col-sm-2">
                            <p className="border-bottom">05037-001</p>
                        </div>
                        <div className="col-sm-8">
                            <p className="border-bottom">Logradouro</p>
                        </div>
                        <div className="col-sm-2">
                            <p className="border-bottom">numero</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-sm-6">
                            <p className="border-bottom">Bairro</p>
                        </div>
                        <div className="col-sm-4">
                            <p className="border-bottom">São Paulo</p>
                        </div>
                        <div className="col-sm-2">
                            <p className="border-bottom">São Paulo</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-sm-12">
                            <p className="border-bottom" >Algum Complemento</p>
                        </div>
                    </div>

                    <h5 className="h5 mt-4">Observações</h5>
                    <div className="row mt-2">
                        <div className="col-sm-12">
                            <p className="border rounded">Lorem ipsum maecenas convallis duis aliquam suspendisse feugiat convallis, consectetur lobortis leo sociosqu sem elementum leo, turpis sit ultrices ante neque potenti urna. laoreet dictumst pellentesque torquent suspendisse at ut cursus class commodo, torquent ornare neque nostra sagittis malesuada neque ac fringilla aenean, conubia faucibus turpis lorem mauris porttitor ornare ligula. risus ac quis consequat elementum imperdiet tempus et inceptos, integer sagittis fusce posuere aliquet hendrerit duis convallis, ipsum nostra ac id nisl ornare iaculis. pellentesque aliquam gravida viverra blandit tempus egestas fringilla nibh, odio hendrerit donec etiam facilisis purus dictum amet nisi, ullamcorper feugiat habitasse etiam erat est in.</p>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-end">
                        <button type="button" className="btn btn-primary mt-5 mr-2 float-right">Iniciar Nova Venda</button>
                        <button type="button" className="btn btn-primary mt-5 mr-2 float-right">Editar</button>
                        <button type="button" className="btn btn-primary mt-5 mr-2 float-right">Excluir</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default LegalFormExists