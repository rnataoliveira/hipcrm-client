import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

import CreateCustomerContainer from '../customers/CreateCustomerContainer'
import CustomerTypeForm from '../customers/CustomerTypeForm'

class Customer extends Component {
    constructor() {
        super()
        this.state = {
            operation: 'search'
        }
    }

    handleNewCustomer(event) {
        this.setState({
            operation: 'new-customer'
        })
        this.props.history.push("/customer/type");
    }    

    render() {
        return (
            <div className="row">
                {this.state.operation === 'search' &&
                <div className="col-12">
                    <div className="col-lg-12 d-flex justify-content-center mb-5">
                        <input className="form-control col-md-4 mt-5 align-self-center text-center" type="search" placeholder="Search" aria-label="Search" />
                    </div>
                    <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-center " />
                    <div className="col-lg-12 d-flex justify-content-center mb-5">
                        <button onClick={this.handleNewCustomer.bind(this)} className="btn btn-primary col-md-2 mt-5 ml-2 align-self-center" type="submit">Novo Cliente</button>
                    </div>
                </div>}
                
                {this.state.operation === 'new-customer' && <CreateCustomerContainer />}
            </div>
        )
    }
}

export default Customer