import React, { useRef } from "react";
import binImg from "/Users/durcak/Desktop/react-trial-master-99bbffd7a46731b7dc702522f430b2ad715edc9f/assets/bin.png";
import coinsImg from "/Users/durcak/Desktop/react-trial-master-99bbffd7a46731b7dc702522f430b2ad715edc9f/assets/coins.png";
import useOnClickOutside from "../../hooks/useOnClickOutside";

export default function Cart({ isToggle, setToggle, carts, removeProductFromCart, clearCart }) {
  // # handle the onclick outside

  console.log(carts);

  return (
    <div className="basket">
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
      <div className="btn">
        <button>Continue</button>
      </div>
      {/* {carts.length !== 0 && <div onClick={() => clearCart()}>Clear Cart</div>} */}
    </div>
  );
}
