import React, { useState, useContext, useEffect } from "react";

import Context from "./store/Context";
import Cart from "./components/Cart";
import Product from "./components/Product";
import Nav from "./components/Nav";

export default function App() {
  const [isToggle, setToggle] = useState(false);
  const context = useContext(Context);

  useEffect(() => {
    console.log(context);
  }, [context]);

  return (
    <div className="screen">
      <Nav phoneNumbers={"1337 1337 1337"} />
      <Cart
        isToggle={isToggle}
        setToggle={setToggle}
        carts={context.carts}
        removeProductFromCart={context.removeProductFromCart}
        clearCart={context.clearCart}
      />

      {isToggle && <OverLay />}
      <div>
        {context.products.map((p) => (
          <Product
            carts={context}
            key={p.id}
            id={p.id}
            image={p.image}
            price={p.price}
            name={p.name}
            stock={p.stock}
            addProductToCart={context.addProductToCart}
          />
        ))}
      </div>
    </div>
  );
}
