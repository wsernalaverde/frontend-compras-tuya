import React, { Component } from 'react'
import FormOrder from './FormOrder'
import ShoppingCartListItem from './ShoppingCartListItem'
import PayOrder from './PayOrder'
import CurrencyFormat from 'react-currency-format'

class CreateOrder extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      showPayOrder: false,
      order: {}
    }
  }

  showPay = (data) => {
    const { productList } = this.props

    data.lineItems = productList

    this.setState({
      showPayOrder: !this.state.showPayOrder,
      order: data
    })
  }

  render () {
    const { productList, goToHome, showButtonMenu } = this.props

    return (
      <div className="container">
        {
          (this.state.showPayOrder)?     
            <div className="row padding-content row-invert-movil">
              <PayOrder goToHome = { goToHome } showButtonMenu = { showButtonMenu } order = {this.state.order} />
            </div>
          :
            <div className="row padding-content row-invert-movil">
              <div className="col-md-6">
                <FormOrder showPay = {this.showPay} />
              </div>
              <div className="col-md-6">
                <div className="card card-list-product">
                  <ul className="shopping-cart__list">
                    {productList.map((product, index) =>
                      <ShoppingCartListItem notShowRemove={true} key={index} {...product} />
                    )}
                  </ul>
                  <p><strong>Total: <CurrencyFormat value={productList.reduce((accum, obj) => accum + obj.price, 0)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></strong></p>
                </div>
              </div>
            </div>
        }
      </div>
    )
  }
}

export default CreateOrder
