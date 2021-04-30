import React, { Component } from 'react'
import Card from './Card'

class Products extends Component {

  constructor(props){
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount () {
    this.getProducts()
  }

  getProducts = () => {
    const url = `${process.env.REACT_APP_URL_SERVICE}/getProducts`
		console.log(url)
    fetch(url)
      .then(res => res.json())
      .then(res => { 
				this.setState({ products: res.data }) 
			})
  }

  render () {
    return (
      <div className="container">
        <div className="row padding-content">
					
					{
						this.state.products.map((item, index) =>
							<div className="col-md-3" key={index}>
								<Card addToCart = {() => this.props.addToCart(item)} item={item} />
							</div>
						)
					}
					
        </div>
      </div>
    )
  }
}

export default Products
