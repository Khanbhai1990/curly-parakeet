import React from 'react';

const CartHeader = (props) => {
  return (
    <header className="row">
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <div className="col s12">
              <a href="/" className="brand-logo">Shopping Cart {props.thestringchild}</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default CartHeader;
