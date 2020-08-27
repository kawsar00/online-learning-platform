import React from 'react';

const Cart = (props) => {
  const { title, price, picture } = props.cart
  return (
    <li className="list-group-item  my-2 shadow ">
      <div className="d-flex justify-content-between align-items-center">
        <img className="w-50 mb-1" src={picture} alt="" />
        <span className="font-weight-bold">Price: <span className="text-danger">${price}</span></span>
      </div>
      <span><small>{title}</small></span>
    </li>
  );
};

export default Cart;