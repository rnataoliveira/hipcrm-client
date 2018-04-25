import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

import PersonForm from './PersonForm'
import LegalForm from './LegalForm'

class CustomerTypeForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customerType: ''
        }
    }

    handleCustomerTypePf(event) {
        this.setState({
            customerType: 'physicalPerson'
        })
        this.props.history.push("/customer/new/physicalPerson");
    }

    handleCustomerTypePj(event) {
        this.setState({
            customerType: 'legalPerson'
        })
        this.props.history.push("/customer/new/legalPerson");
    }


    render() {
        return (
            <div className="col-lg-12 d-flex justify-content-center">
                <button ref="physicalPerson" onClick={(event) => this.handleCustomerTypePf()} type="button" className="btn btn-primary mt-5 align-self-center mr-5">Pessoa Física</button>
                <button ref="legalPerson" onClick={(event) => this.handleCustomerTypePj()} type="button" className="btn btn-primary mt-5 mr-2 align-self-center">Pessoa Jurídica</button>
            </div>
        )
    }
}

export default CustomerTypeForm