import React, { Component, Fragment } from 'react'
import Alert from '@material-ui/lab/Alert'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Menu from './components/Menu'
import Products from './components/Products'
import CreateOrder from './components/CreateOrder'
import Orders from './components/Orders'

class App extends Component {

  constructor(props){
    super(props)
    this.state = { 
      showCreate: false,
      productList: [],
      showAlert: false,
      showActions: true
    }
  }

  toggleContent = () => {
    this.setState({
      showCreate: !this.state.showCreate
    })
  }

  resetCart = () => {
    this.setState({
      productList: []
    })
    this.toggleContent()
    this.showButtonMenu()
  }

  addToCart = (data) => {
    this.setState({
      productList: this.state.productList.concat(data),
      showAlert: true
    })
    setTimeout(() => { this.setState({
      showAlert: false
    })}, 1000)
  }

  removeToCart = (data) => {
    let arr = [...this.state.productList]
    arr = arr.filter(item => item._id !== data._id)
    this.setState({
      productList: arr
    })
  }

  showButtonMenu = () => {
    this.setState({
      showActions: !this.state.showActions
    })
  } 

  render () {
    return (
      <Router>
        <Switch>
          <Route path="/orders/">
            <Menu />
              <Orders />
          </Route>
          <Route>
            <div className="App">
              {this.state.showAlert === true &&
                <div className="container-emergent-notification">
                  <Alert variant="filled" severity="success">
                    Producto agregado
                    </Alert>
                </div>
              }
              <Menu showActions = {this.state.showActions} backButton = {this.state.showCreate} toggleContent = {this.toggleContent} productList = {this.state.productList} removeToCart = {this.removeToCart}/>    
              {
                (this.state.showCreate)?
                  <CreateOrder showButtonMenu = {this.showButtonMenu} goToHome = {this.resetCart} productList = {this.state.productList} goList = {this.toggleContent} />
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
