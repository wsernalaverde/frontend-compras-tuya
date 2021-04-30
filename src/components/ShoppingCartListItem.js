import React from 'react'
import { FaTimes } from 'react-icons/fa'
import CurrencyFormat from 'react-currency-format'

const ShoppingCartListItem = ({ name, image, price, removeToCart, notShowRemove }) =>
  <li className="shopping-cart-item">
    <figure className="shopping-cart-item__figure">
      <img className="shopping-cart-item__image" src={image} />
    </figure>
    <div className="shopping-cart-item__detail">
      <p><strong>
        {name}
      </strong></p>
      <p>
        <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
      </p>
      {/* <p><small>Cantidad: 
        {quantity}
      </small></p> */}
    </div>
    {
      (!notShowRemove) &&
      <button onClick={removeToCart} className="btn-icon"><FaTimes /> </button>
    }
    <style>{`
      .shopping-cart-item {
        display: flex;
        flex-wrap: wrap;
        border-bottom: 2px solid #f7f7fa;
        margin-bottom: 20px;
        padding-bottom: 10px;
        align-items: center;
        position: relative;
      }
      .shopping-cart-item .btn-icon {
        position: absolute;
        right: 10px;
        top: 3px;
      }
      .shopping-cart-item p {
        margin-left: 10px;
        margin-bottom: 0px;
        font-size: 17px;
        line-height: 22px;
      }
      .shopping-cart-item__figure {
        width: 50px;
        margin: 0;
      }
      .shopping-cart-item__image {
        width: 100%;
      }
    `}</style>
  </li>;

export default ShoppingCartListItem;