import React, { Component } from 'react'

class Customer extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <fieldset>
                        <form className="form-group row my-2 my-lg-0 d-flex justify-content-center ">
                            <div className="col-lg-12 d-flex justify-content-center mb-5">
                                <input className="form-control col-md-4 mt-5 align-self-center text-center" type="search" placeholder="Search" aria-label="Search" />
                            </div>
                            <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-center " />
                            <br />
                            <button className="btn btn-primary col-md-2 mt-5 ml-2 align-self-center" type="submit">Novo Cliente</button>
                        </form>
                        <button type="submit" className="btn btn-primary mt-5 float-right">Salvar</button>
                        <button type="submit" className="btn btn-primary mt-5 mr-2 float-right">Voltar</button>
                    </fieldset>
                </div>
            </div>
        )
    }
}

export default Customer