import React, { useContext } from 'react';
import "./CartList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import removeImg from "../../img/remove.png"

export default function CartList() {
  const { products, cart, setCart } = useContext(AppContext);

  function onQuantityChange(product, qty) {
    if (qty > 0) {
      setCart({
        ...cart,
        [product.id]: qty
      });
    }
  }

  function incrementQuantity(product) {
    const newQuantity = (cart[product.id] || 0) + 1;
    onQuantityChange(product, newQuantity);
  }

  function decrementQuantity(product) {
    const newQuantity = (cart[product.id] || 0) - 1;
    if (newQuantity > 0) {
      onQuantityChange(product, newQuantity);
    }
  }

  function onItemRemove(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }

  const productIds = Object.keys(cart);

  const total = productIds.reduce((acc, productId) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      return acc + (product.price * cart[productId]);
    }
    return acc;
  }, 0);

  const output = products
    .filter((product) => productIds.includes(product.id))
    .map((product) => (
      <div className="cartItem" key={product.id}>
        <Link to={"/products/" + product.slug}>
          <img src={product.picture} alt={product.name} />
        </Link>
        <div className="itemDetails flex">
          <Link to={"/products/" + product.slug}>{product.name}</Link>
          <span>${product.price}</span>
          <div className="inputs">
            <button className="quantityButton" onClick={() => decrementQuantity(product)}>-</button>
            <input
              type="number"
              value={cart[product.id]}
              min={1}
              onChange={(event) => onQuantityChange(product, +event.target.value)} />
            <button className="quantityButton" onClick={() => incrementQuantity(product)}>+</button>
            <button className="removeButton" onClick={() => onItemRemove(product)}>
              <img src={removeImg} alt="" />
            </button>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="CartList flex">
      {output}
      <p className='total'>Total: ${total.toFixed(2)}</p>
    </div>
  );
}