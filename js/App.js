import React, { useState, useContext, useEffect } from "react";

import Context from "./store/Context";
import Cart from "./components/Cart";
import Product from "./components/Product";
import Nav from "./components/Nav";
import logo_topImg from "../assets/logo.png";

export default function App() {
  const [isToggle, setToggle] = useState(false);
  const context = useContext(Context);

  useEffect(() => {
    console.log(context);
  }, [context]);

  return (
    <div className="screen">
      <Nav phoneNumber={"1337 1337 1337"} />
      <div>
        <div className="bg_img"></div>
        <img class="logo_topImg" src={logo_topImg} alt="joyistick-logo" />
      </div>
      <Cart
        isToggle={isToggle}
        setToggle={setToggle}
        carts={context.carts}
        removeProductFromCart={context.removeProductFromCart}
        clearCart={context.clearCart}
      />
      {isToggle && <OverLay />}
      <div className="product_container">
        {context.products.map((p) => (
          <Product
            carts={context}
            key={p.id}
            id={p.id}
            image={p.image}
            price={p.price}
            name={p.name}
            stock={p.stock}
            description={p.description}
            addProductToCart={context.addProductToCart}
          />
        ))}
      </div>
    </div>
  );
}
