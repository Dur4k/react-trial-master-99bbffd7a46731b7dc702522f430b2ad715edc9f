import React, { useState } from "react";
import binImg from "../../../assets/bin.png";
import coinsImg from "../../../assets/coins.png";

export default function Cart({ carts, removeProductFromCart }) {
  const emptyCart = carts.length === 0;
  const [active, setActive] = useState(false);

  return (
    <div className={active ? "basket_active" : "basket"}>
      <div>
        <h1>Basket</h1>
      </div>

      <div className="game_container">
        {emptyCart ? (
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
      {emptyCart ? null : (
        <div className="total">
          <div className="total_text">Total</div>
          <div className="total_price">{carts.reduce((amount, item) => item.product.price * item.quantity + amount, 0)} Gil</div>
        </div>
      )}

      {emptyCart && !active ? (
        <div className="btn btn_emty">
          <button>Continue</button>
        </div>
      ) : (
        <div className="btn">
          <button onClick={() => setActive(!active)}>{active ? "Go Back" : "Continue"}</button>
        </div>
      )}
    </div>
  );
}
