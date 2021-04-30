import React, { Component } from 'react'
import Form from './Form'
import ShoppingCartListItem from './ShoppingCartListItem'
import CurrencyFormat from 'react-currency-format'

class CreateOrder extends Component {
  constructor(props) {
    super(props)
  }

  showPay = (data) => {
    const { productList } = this.props

    data.lineItems = productList
    console.log(data)
  }

  render () {
    const { productList } = this.props

    return (
      <div className="container">
        <div className="row padding-content">
          <div className="col-md-6">
            <Form showPay = {this.showPay} />
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
      </div>
    )
  }
}

export default CreateOrder
