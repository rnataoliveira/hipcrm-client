import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

import PersonForm from './PersonForm'
import LegalForm from './LegalForm'

class CustomerTypeForm extends Component {
    constructor() {
        super()
        this.state = {
            customerType: 'choose'
        }
    }

    handleCustomerTypePf(event) {
        this.setState({
            customerType: 'physical-person'
        })
    }

    handleCustomerTypePj(event) {
        this.setState({
            customerType: 'legal-person'
        })
    }


    render() {
        return (
            <div className="col-lg-12 mb-5 d-flex justify-content-center">
                {this.state.customerType === 'choose' &&
                    <div className="d-flex justify-content-center">
                        <button ref="physical-person" onClick={this.handleCustomerTypePf.bind(this)} type="button" className="btn btn-primary mt-5 align-self-center mr-5">Pessoa Física</button>
                        <button ref="legal-person" onClick={this.handleCustomerTypePj.bind(this)} type="button" className="btn btn-primary mt-5 mr-2 align-self-center">Pessoa Jurídica</button>
                    </div>
                }
                {this.state.customerType === 'physical-person' && <PersonForm />}
                {this.state.customerType === 'legal-person' && <LegalForm />}
            </div>
        )
    }
}

export default CustomerTypeForm