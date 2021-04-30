import React, { Component, Fragment } from 'react'

class FormOrder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buyerName: '',
	    buyerPhone: '',
	    buyerEmail: '',
	    shippingAddress: '',
	    shippingCity: '',
	    shippingRegion: '',
	    shippingCountry: '',
      lineItems: []
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const data = {...this.state}

    this.props.showPay(data)
  }

  handleInputChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return(
      <Fragment>
        <form className="custom-form" onSubmit={this.handleSubmit}>
          <div className="row-form">
            <div className="form-group">
              <input type="text" value={this.state.buyerName} className="form-control" placeholder="Nombre" name="buyerName" onChange={this.handleInputChange} required />
            </div>
            <div className="form-group">
              <input type="number" value={this.state.buyerPhone} className="form-control" placeholder="Celular" name="buyerPhone" onChange={this.handleInputChange} required />
            </div>
          </div>
          <div className="row-form">
            <div className="form-group">
              <input type="email" value={this.state.buyerEmail} className="form-control" placeholder="Email" name="buyerEmail" onChange={this.handleInputChange} required />
            </div>
          </div>
          <div className="row-form">
            <div className="form-group">
              <input type="text" value={this.state.shippingAddress} className="form-control" placeholder="Dirección de envío" name="shippingAddress" onChange={this.handleInputChange} required />
            </div>
            <div className="form-group">
              <input type="text" value={this.state.shippingCity} className="form-control" placeholder="Ciudad" name="shippingCity" onChange={this.handleInputChange} required />
            </div>
          </div>
          <div className="row-form">
            <div className="form-group">
              <input type="text" value={this.state.shippingRegion} className="form-control" placeholder="Departamento" name="shippingRegion" onChange={this.handleInputChange} required />
            </div>
            <div className="form-group">
              <input type="text" value={this.state.shippingCountry} className="form-control" placeholder="País" name="shippingCountry" onChange={this.handleInputChange} required />
            </div>
          </div>
          <div className="row-form">
            <div className="form-group">
              <input type="submit" className="btn btn-lg" value="Continuar con el pago"/>
            </div>
          </div>
        </form>
      </Fragment>
    )
  }
}

export default FormOrder