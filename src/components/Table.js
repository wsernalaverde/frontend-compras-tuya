import React from 'react'
import CurrencyFormat from 'react-currency-format'
import '../Table.css'

function Table (props) {
  return(
    <table>
      <thead>
        <tr>
          <th><p>Fecha compra</p></th>
          <th><p>Número de factura</p></th>
          <th><p>Cliente</p></th> 
          <th><p>Email Cliente</p></th>
          <th><p>Total</p></th>
        </tr>
      </thead>
      <tbody>
        {
          props.items.map((item, index) =>
            <tr key={index}>
              <td><p>{item.creationDate}</p></td>
              <td><p>{item.orderNumber}</p></td>
              <td><p>{item.buyerName}</p></td>
              <td><p>{item.buyerEmail}</p></td>
              <td><p>{<CurrencyFormat value={item.lineItems.reduce((accum, obj) => accum + obj.price, 0)} displayType={'text'} thousandSeparator={true} prefix={'$'} />}</p></td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default Table