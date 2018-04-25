import React, { Component } from 'react'

class CustomerTypeForm extends Component {

    render() {
        return(
            <div className="col-lg-12 d-flex justify-content-center">
                <button type="button" className="btn btn-primary mt-5 align-self-center mr-5">Pessoa Física</button>
                <button type="button" className="btn btn-primary mt-5 mr-2 align-self-center">Pessoa Jurídica</button>
            </div>         
        )
    }
}

export default CustomerTypeForm