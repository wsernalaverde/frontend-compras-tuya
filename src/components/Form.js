import React, { Component, Fragment } from 'react'
import Alert from '@material-ui/lab/Alert'

class Form extends Component {
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
      showSuccess: false,
      lineItems: []
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const data = {...this.state}

    delete data.showSuccess

    this.props.showPay(data)

    // const url = `${process.env.REACT_APP_URL_SERVICE}/addSellOrder`

    // try {

    //   let res = await fetch(url, {
    //     method: 'post',
    //     headers: {
    //       'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    //   })

    //   if (res.ok) {
    //     res = await res.json()

    //     this.setState({
    //       showSuccess: 'success',
    //       store: '',
    //       externalOrderNumber: '',
    //       buyerName: '',
    //       buyerPhone: '',
    //       buyerEmail: '',
    //       shippingAddress: '',
    //       shippingCity: '',
    //       shippingRegion: '',
    //       shippingCountry: '',
    //       lineItems: [{
    //         productName: '',
    //         productQty: '',
    //         productWeight: ''
    //       }]  
    //     })

    //     setTimeout(() => { 
    //       this.setState({
    //         showSuccess: false
    //       })
    //       this.props.goList()
    //     }, 1000)

    //   } else {
    //     let err = new Error()
    //     err.data = await res.json()
    //     throw err
    //   }

    // } catch (e) {
    //   console.log(e.data)
    //   this.setState({
    //     showSuccess: 'error'
    //   })
    //   setTimeout(() => { this.setState({
    //     showSuccess: false
    //   })}, 2000)
    // }
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
        {this.state.showSuccess === 'success' &&
            <Alert variant="filled" severity="success">
              Order created
            </Alert>
        }
        {this.state.showSuccess === 'error' &&
            <Alert variant="filled" severity="error">
              Error to create Order, validate all fields and try again
            </Alert>
        }
       
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

export default Form