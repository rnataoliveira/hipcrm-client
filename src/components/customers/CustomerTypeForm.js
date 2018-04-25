import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

import PersonForm from './PersonForm'
import JuridicalForm from './JuridicalForm'

class CustomerTypeForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customerType: ''
        }
    }

    handleCustomerTypePf(event) {
        this.setState({
            customerType: 'pf'
        })
        this.props.history.push("/customer/new/pf");
    }
    handleCustomerTypePj(event) {
        this.setState({
            customerType: 'pj'
        })
        this.props.history.push("/customer/new/pj");
    }


    render() {
        return (
            <div className="col-lg-12 d-flex justify-content-center">
                <button ref="pf" onClick={(event) => this.handleCustomerTypePf()} type="button" className="btn btn-primary mt-5 align-self-center mr-5">Pessoa Física</button>
                <button ref="pj" onClick={(event) => this.handleCustomerTypePj()} type="button" className="btn btn-primary mt-5 mr-2 align-self-center">Pessoa Jurídica</button>
            </div>
        )
    }
}

export default CustomerTypeForm