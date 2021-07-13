import React, { useState, useContext } from "react";

import Context from "../../store/Context";

export default function Product({ addProductToCart, ...props }) {
  const [isHover, setHover] = useState(false);
  const context = useContext(Context);
  const rightArray = context.carts.filter((p) => p.product.id === props.id);
  // console.log(rightArray[0].quantity);
  // console.log(props);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  if (rightArray[0]) {
    if (rightArray[0].quantity === props.stock) {
      return (
        <div>
          <img src={props.image} />
          <div>
            <div>{props.name}</div>
            <div>Out of Stock</div>
            <div>out of stock</div>
          </div>
        </div>
      );
    }
  }
  return (
    <div onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
      {isHover && <div onClick={() => addProductToCart({ ...props })}></div>}

      <div>
        <img src={props.image} />
        <div>
          <div>{props.name}</div>
          <div>${props.price}</div>
          <div>{props.stock}</div>
        </div>
      </div>
    </div>
  );
}
