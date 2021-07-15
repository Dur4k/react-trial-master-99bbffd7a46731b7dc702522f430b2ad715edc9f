import React, { useState } from "react";
import binImg from "/Users/durcak/Desktop/react-trial-master-99bbffd7a46731b7dc702522f430b2ad715edc9f/assets/bin.png";
import coinsImg from "/Users/durcak/Desktop/react-trial-master-99bbffd7a46731b7dc702522f430b2ad715edc9f/assets/coins.png";
import useOnClickOutside from "../../hooks/useOnClickOutside";

export default function Cart({ isToggle, setToggle, carts, removeProductFromCart, clearCart }) {
  const [active, setActive] = useState(false);
  console.log(carts);

  return (
    <div className={active ? "basket_active" : "basket"}>
      <div>
        <h1>Basket</h1>
      </div>
      {/* <div onClick={() => setToggle(true)}></div> */}

      {/* <div className={isToggle ? "expand" : "shrink"}> */}
      <div className="game_container">
        {carts.length === 0 ? (
          <div className="item">
            <h2>No items</h2>
          </div>
        ) : (
          carts.map(({ product, quantity }) => (
            <div className="listOfProducts" key={product.id}>
              <div className="left">
                <img src={product.image} />
                {/* flex div */}
                <div>
                  <div className="name">{product.name}</div>
                  <div className="price">
                    <img src={coinsImg} alt="coins" />
                    {quantity > 1 ? { quantity } : ""} {product.price * quantity} Gil
                  </div>
                </div>
              </div>
              <div className="bin" onClick={() => removeProductFromCart(product.id)}>
                <img src={binImg} alt="bin" />
              </div>
            </div>
          ))
        )}
      </div>
      {carts.length === 0 ? null : (
        <div className="total">
          <div className="total_text">Total</div>
          <div className="total_price">{carts.reduce((amount, item) => item.product.price * item.quantity + amount, 0)} Gil</div>
        </div>
      )}

      <div className="btn">
        <button onClick={() => setActive(true)}>Continue</button>
      </div>
      {/* {carts.length !== 0 && <div onClick={() => clearCart()}>Clear Cart</div>} */}
    </div>
  );
}
