import React, { Component, Fragment } from 'react'
import logo from '../logo_tuya.svg'
import { FaShoppingCart } from 'react-icons/fa'
import ShoppingCartListItem from './ShoppingCartListItem'
import classNames from 'classnames'
import CurrencyFormat from 'react-currency-format'
import '../Menu.css'

class Menu extends Component {

  constructor(props){
    super(props)

    this.state = {
      isProductListHidden: true
    }
  }

  toggleProductList = () => {
    const { isProductListHidden } = this.state

    this.setState({ isProductListHidden: !isProductListHidden })
  }

  goToPay = () => {
    this.toggleProductList()
    this.props.toggleContent()
  }

  renderProductList() {
    const { productList } = this.props
    const { isProductListHidden } = this.state

    return (
      <Fragment>
        <div onClick={this.toggleProductList} className={classNames('shopping-cart__details__overlay', {
          'is-hidden': isProductListHidden
        })}></div>
        <div
          className={classNames('card shopping-cart__details', {
            'is-hidden': isProductListHidden
          })}
        >
          
          {
            (productList.length > 0)?
              <Fragment>
                <ul className="shopping-cart__list">
                  {productList.map((product, index) =>
                    <ShoppingCartListItem removeToCart = {() => this.props.removeToCart(product)} key={index} {...product} />
                  )}
                </ul>
                <p><strong>Total: <CurrencyFormat value={productList.reduce((accum, obj) => accum + obj.price, 0)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></strong></p>
                <button onClick={this.goToPay} className="btn">Ir a pagar</button>
              </Fragment>
            :
              <p>Tu carrito está vacío</p>
          }

        </div>
      </Fragment>
    )
  }

  render () {
    const { productList, toggleContent, backButton, showActions } = this.props

    return(
      <nav className='container-menu fixed-top'>
        <div className="subcontainer">
          <div className="logo">
            <img src={logo} alt="Tuya" />
          </div>
          {showActions &&
            <div className="actions">
              {backButton
                ? <button onClick={toggleContent} className="btn">{ '< Volver al carrito' }</button>
                : 
                <button onClick={this.toggleProductList} className="btn">
                  <FaShoppingCart />           
                  <span>Carrito</span>
                  {productList.length > 0 &&
                    <span className="shopping-cart__quantity">{productList.length}</span>
                  }
                </button>
              }
              {this.renderProductList()}
            </div>
          }
        </div>

      </nav>
    )
  }
}

export default Menu
