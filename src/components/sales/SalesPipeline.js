import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'

import LinkContainer from './LinkContainer'

import Customer from './Customer'
import Appointments from './Appointments'
import Documents from './Documents'
import Agreement from './Agreement'

const SalesPipeline = ({ match, location }) => (
    <div className='row mt-5'>
        <div className="col-12">
            <h1>
                Processo de Vendas
                <small className="ml-2 text-muted">Nova Venda</small>
            </h1>
        </div>
        <div className='col-12'>
            <ul className="nav nav-tabs nav-fill">
                <li className="nav-item">
                    <LinkContainer location={location} to={`${match.url}/customer`}>Cliente</LinkContainer>
                </li>
                <li className="nav-item">
                    <LinkContainer location={location} to={`${match.url}/appointments`}>Agendamentos</LinkContainer>
                </li>
                <li className="nav-item">
                    <LinkContainer location={location} to={`${match.url}/documents`}>Documentos</LinkContainer>
                </li>
                <li className="nav-item">
                    <LinkContainer location={location} to={`${match.url}/agreement`}>Contrato</LinkContainer>
                </li>
            </ul>
        </div>
        <div className="col-12">
            <Switch>
                <Route path="/sales/:id/customer" component={Customer} />
                <Route path="/sales/:id/appointments" component={Appointments} />
                <Route path="/sales/:id/documents" component={Documents} />
                <Route path="/sales/:id/agreement" component={Agreement} />
            </Switch>
        </div>
    </div>
)

export default SalesPipeline