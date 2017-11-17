import React, { Component } from 'react'

class AddItem extends Component {

  state = {
    productId: '',
    quantity: 1
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.itemAdded(this.state)
  }

  handleProductsList = (e) => {
    this.setState({ productId: e.target.value })
  }

  handleQuantityChange = (e) => {
    this.setState({ quantity: e.target.value })
  }

  render () {
    let productList = this.props.products.map(product => {
      return (
        <option
          key={product.id}
          value={product.id}
        >
          {product.name}
        </option>
      )
    })
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col s5">
            <select
              className="browser-default"
              value={this.state.productId}
              onChange={this.handleProductsList}
            >
              <option disabled value="">Choose Product</option>
              {productList}
            </select>
            </div>
            <div className="col s5">
            <input
              type="number"
              value={this.state.quantity}
              onChange={this.handleQuantityChange}
            />
            </div>
            <div className="col s2">
              <input type="submit" value="Add"/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddItem
