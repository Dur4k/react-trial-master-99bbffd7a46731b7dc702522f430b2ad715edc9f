import React, { useRef } from "react";

import useOnClickOutside from "../../hooks/useOnClickOutside";

export default function Cart({ isToggle, setToggle, carts, removeProductFromCart, clearCart }) {
  // # handle the onclick outside

  console.log(carts);

  return (
    <div className="basket">
      <h1>Basket</h1>
      <div onClick={() => setToggle(true)}>
        <div>{carts.length}</div>
      </div>

      <div className={isToggle ? "expand" : "shrink"}>
        <div>shopping cart</div>
        {carts.length === 0 ? (
          <div>
            <div>No items</div>
            <button>Continue</button>
          </div>
        ) : (
          carts.map(({ product, quantity }) => (
            <div key={product.id}>
              <div src={product.image} />
              <div>
                <div>
                  <div>{product.name}</div>
                  <CardRemove onClick={() => removeProductFromCart(product.id)} />
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

        {carts.length !== 0 && <ClearButton onClick={() => clearCart()}>Clear Cart</ClearButton>}
      </div>
    </div>
  );
}
