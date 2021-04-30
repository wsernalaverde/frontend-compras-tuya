import React, { Component, Fragment } from 'react'
import Alert from '@material-ui/lab/Alert'
import CurrencyFormat from 'react-currency-format'

class FormPay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      idUser: '',
      phoneUserCard: '',
      nameCard: '',
	    expirateDate: '',
	    cvc: '',
	    numberCuo: ''    
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const data = {...this.state}

    this.props.processPay(data)
  }

  handleInputChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSelect = (e) => {
    e.preventDefault()
    this.setState({
      numberCuo: e.target.value   
    })
  }

  render () {
    const { showNotificacion } = this.props

    return(
      <Fragment>
        {showNotificacion === 'error' &&
            <Alert variant="filled" severity="error">
              Error al realizar el proceso de pago, valida los datos e intenta de nuevo
            </Alert>
        }
        <form className="custom-form" onSubmit={this.handleSubmit}>
          <div className="row-form">
            <div className="form-group">
              <label>Documento de indetificación</label>
              <input type="number" value={this.state.idUser} className="form-control" name="idUser" onChange={this.handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Número de celular</label>
              <CurrencyFormat format="+57 (###) ###-####" className="form-control" placeholder="+57 (###) ###-####" name="phoneUserCard" mask="_" onChange={this.handleInputChange} required />
            </div>
          </div>
          <div className="row-form">
            <div className="form-group">
              <label>Nombre de tarjeta</label>
              <input type="text" value={this.state.nameCard} className="form-control" name="nameCard" onChange={this.handleInputChange} required />
            </div>
          </div>
          <div className="row-form">
            <div className="form-group">
              <label>Número de tarjeta</label>
              <CurrencyFormat format="#### #### #### ####" className="form-control" placeholder="0000 0000 0000 0000" name="cardNumber" onChange={this.handleInputChange} mask="_" required />
            </div>
          </div>
          <div className="row-form">
            <div className="form-group">
              <label>Fecha de vencimiento</label>
              <CurrencyFormat format="##/##" placeholder="MM/YY" className="form-control" name="expirateDate" onChange={this.handleInputChange} required mask={['M', 'M', 'Y', 'Y']}/>
            </div>
            <div className="form-group">
              <label>Código de seguridad (CVV/CVC)</label>
              <CurrencyFormat format="###" placeholder="MM/YY" className="form-control" name="cvc" placeholder="000" onChange={this.handleInputChange} required mask="_" />
            </div>
            <div className="form-group">
              <div className="cont-select">
                <label>Número de cuotas</label>
                <select className="form-select" onChange={this.handleSelect}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>  
            </div>
          </div>
          <div className="row-form">
            <div className="form-group">
              <input type="submit" className="btn btn-lg" value="Pagar"/>
            </div>
          </div>
        </form>
      </Fragment>
    )
  }
}

export default FormPay