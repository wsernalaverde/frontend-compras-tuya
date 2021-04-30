import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import FormPay from './FormPay'
import CurrencyFormat from 'react-currency-format'

class PayOrder extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showNotificacion: false,
			showSuccess: false,
			orderNumber: ''
		}
	}

	processPay = async (data) => {
		const { order, showButtonMenu } = this.props

		delete data.cvc

		order['payMethod'] = data
		

		const url = `${process.env.REACT_APP_URL_SERVICE}/addSellOrder`

		try {

			let res = await fetch(url, {
				method: 'post',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(order)
			})

			if (res.ok) {
				res = await res.json()
				console.log(res)
				this.setState({
					showSuccess: !this.state.showSuccess,
					orderNumber: res.data.order.orderNumber
				})

				showButtonMenu()

			} else {
				let err = new Error()
				err.data = await res.json()
				throw err
			}

		} catch (e) {
			console.log(e.data)
			this.setState({
				showNotificacion: 'error'
			})
			setTimeout(() => {
				this.setState({
					showNotificacion: false
				})
			}, 2000)
		}
	}

	render() {
		const { order, goToHome } = this.props

		return (
			<Fragment>
				{
					(!this.state.showSuccess) ?
						<Fragment>
							<div className="col-md-8">
								<FormPay showNotificacion={this.state.showNotificacion} processPay={this.processPay} />
							</div>
							<div className="col-md-4">
								<div className="card card-list-product">
									<div className="card-title">
										<h2>Datos de envío</h2>
									</div>
									<div className="card-content">
										<p><strong>Nombre: {order.buyerName}</strong></p>
										<p><strong>Celular: {order.buyerPhone}</strong></p>
										<p><strong>Email: {order.buyerEmail}</strong></p>
										<p><strong>Dirección de envío: {order.shippingAddress}</strong></p>
										<p><strong>Ciudad de envío: {order.shippingCity}</strong></p>
										<p><strong>Departamento: {order.shippingRegion}</strong></p>
										<p><strong>País: {order.shippingCountry}</strong></p>
									</div>
									<div className="card-title">
										<h2>Resumen de la compra</h2>
									</div>
									<div className="card-content">
										<p><strong>Número de prouctos: {order.lineItems.length}</strong></p>
										<p><strong>Total a pagar: <CurrencyFormat value={order.lineItems.reduce((accum, obj) => accum + obj.price, 0)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></strong></p>
									</div>
								</div>
							</div>
						</Fragment>
						:
						<div className="center-content">
							<div className="card card-list-product">
								<div className="card-title">
									<h1>Felicidades</h1>
								</div>
								<div className="card-content">
									<p><strong>Tú compra se ha registrado con Éxito</strong></p>
									<p><strong>Número de orden: {this.state.orderNumber}</strong></p>
									<button className="btn btn-table" onClick={goToHome}>Volver a la tienda</button>
								</div>
							</div>
						</div>
				}
			</Fragment>
		)
	}
}

export default PayOrder
