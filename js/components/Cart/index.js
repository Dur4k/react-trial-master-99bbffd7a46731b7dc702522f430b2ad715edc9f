import React, { useRef } from "react";

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
      {carts.length === 0 ? (
        <div className="item">
          <h2>No items</h2>
        </div>
      ) : (
        carts.map(({ product, quantity }) => (
          <div key={product.id}>
            <div src={product.image} />
            <div>
              <div>
                <div>{product.name}</div>
                <div onClick={() => removeProductFromCart(product.id)}></div>
              </div>
              <div>
                <div>
                  Total Quantity ({quantity}) - ${product.price * quantity}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="btn">
        <button>Continue</button>
      </div>
      {carts.length !== 0 && <div onClick={() => clearCart()}>Clear Cart</div>}
    </div>
  );
}
