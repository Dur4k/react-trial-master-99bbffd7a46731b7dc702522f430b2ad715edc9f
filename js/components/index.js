import React, { useContext } from "react";

import Context from "../../store/Context";

export default function Product({ addProductToCart, ...props }) {
  const context = useContext(Context);
  const rightArray = context.carts.filter((p) => p.product.id === props.id);
  // console.log(rightArray[0].quantity);
  // console.log(props);

  if (rightArray[0]) {
    if (rightArray[0].quantity === props.stock) {
      return (
        <div>
          <img src={props.imageURL} />
          <div>
            <div>{props.price}</div>
            <div>Out of Stock</div>
            <div>out of stock</div>
          </div>
        </div>
      );
    }
  }
  return (
    <div>
      <div onClick={() => addProductToCart({ ...props })}></div>)
      <div>
        <img src={props.imageURL} />
        <div>
          <div>{props.title}</div>
          <div>${props.price}</div>
          <div>{props.stock}</div>
          <div>{props.description}</div>
        </div>
      </div>
    </div>
  );
}
