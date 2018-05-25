import React, { Component } from 'react'
import { withRouter } from "react-router-dom"

class Documents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addNew: false
    }
  }

  handleGoBack(event) {
    console.log('Let\'s go back!')
  }

  handleGogoForward(event) {
    console.log('Let\'s go foward!')
  }

  addNewFile(event) {
    this.setState({
      addNew: true
    })
  }

  render() {
    return (
      <div>
        <h1>Documentos</h1>
        <form>
          <div className="input-group mb-3">
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="inputGroupFile02" />
              <label className="custom-file-label" forHtml="inputGroupFile02">Carregar Arquivos</label>
            </div>
            <div className="input-group-append">
              <span className="input-group-text" id="" onClick={(event) => this.addNewFile()}>+</span>
            </div>
          </div>

          {this.state.addNew && (
            <div className="input-group mb-3">
              <div className="custom-file">
                <input type="file" className="custom-file-input" id="inputGroupFile02" />
                <label className="custom-file-label" forHtml="inputGroupFile02">Carregar Arquivos</label>
              </div>
            </div>
          )}

          <button onClick={this.handleGogoForward.bind(this)} type="button" className="btn btn-primary mt-5 mr-2 float-right">Upload</button>
          <button onClick={this.handleGoBack.bind(this)} type="button" className="btn btn-primary mt-5 mr-2 float-right">Anterior</button>
        </form>
      </div >
    )
  }
}

export default Documents