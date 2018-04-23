import React from 'react'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'

import Customer from './Customer'
import Appointments from './Appointments'
import Documents from './Documents'
import Agreement from './Agreement'

const SalesPipeline = props => {
    const { match } = props
    return (
        <div className='row mt-5'>
            <div className='col-12'>
                <ul class="nav nav-tabs nav-fill">
                    <li class="nav-item">
                        <Link to={`${match.url}/customer`} className="nav-link active">Cliente</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={`${match.url}/appointments`} className="nav-link">Agendamentos</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={`${match.url}/documents`} className="nav-link">Documentos</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={`${match.url}/agreement`} className="nav-link">Contrato</Link>
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
}

export default SalesPipeline