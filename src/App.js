import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Menu from './components/Menu'
import Products from './components/Products'
import CreateOrder from './components/CreateOrder'

class App extends Component {

  constructor(props){
    super(props)
    this.state = { 
      showCreate: false,
      productList: []
    }
  }

  toggleContent = () => {
    this.setState({
      showCreate: !this.state.showCreate
    })
  }

  addToCart = (data) => {
    this.setState({
      productList: this.state.productList.concat(data)
    })
  }

  removeToCart = (data) => {
    let arr = [...this.state.productList]
    arr = arr.filter(item => item._id !== data._id)
    this.setState({
      productList: arr
    })
  }

  render () {
    return (
      <Router>
        <Switch>
          <Route>
            <div className="App">
              <Menu backButton = {this.state.showCreate} toggleContent = {this.toggleContent} productList = {this.state.productList} removeToCart = {this.removeToCart}/>    
              {
                (this.state.showCreate)?
                  <CreateOrder productList = {this.state.productList} goList = {this.toggleContent} />
                :
                  <Products addToCart = {this.addToCart} />
              }
            </div>
          </Route>
        </Switch>

      </Router>
    )
  }
}

export default App;
