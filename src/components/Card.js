import React from 'react'
import CurrencyFormat from 'react-currency-format'

function Card (props) {
  return(  
    <div className="card">
        <img src={props.item.image} className="card-img-top"></img>
        <div className="card-body">
            <h5 className="card-title">{props.item.name}</h5>
            <p className="card-text">
            <CurrencyFormat value={props.item.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </p>
            <button onClick={props.addToCart} className="btn btn-primary">Agregar</button>
        </div>   
    </div>
  )
}

export default Card