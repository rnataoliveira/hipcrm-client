import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class Documents extends Component {
    constructor(props) {
        super(props)
    }

    handleGoBack(event) {
        this.props.history.push("/sales/new/appointments");
    }

    handleGogoForward(event) {
        this.props.history.push("/sales/new/agreement");
    }

    render() {
        return (
            <div>
                <h1>Documentos</h1>
                <form>
                    <div class="input-group mb-3">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile02" />
                            <label class="custom-file-label" for="inputGroupFile02">Carregar Arquivos</label>
                        </div>
                        <div class="input-group-append">
                            <span class="input-group-text" id="">+</span>
                        </div>
                    </div>
                    <button onClick={this.handleGogoForward.bind(this)} type="button" className="btn btn-primary mt-5 mr-2 float-right">Next</button>
                    <button type="button" className="btn btn-primary mt-5 mr-2 float-right">Upload</button>
                    <button onClick={this.handleGoBack.bind(this)}  type="button" className="btn btn-primary mt-5 mr-2 float-right">Anterior</button>
                </form>
            </div>
        )
    }
}

export default Documents