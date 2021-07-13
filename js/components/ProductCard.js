import React, { useContext } from "react";
import Rating from "./Rating";
import CartContext from "../context/cart/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "€" };
  return (
    <div className="productCard__div">
      <div>
        <img className="productCard__img" src={product.image} alt="" />
        <h4>{product.name}</h4>
        <div className="ProductCard__price">
          <h5>{`${product.price}`}</h5>
        </div>
        <div className="ProductCard__Rateing">
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </div>
        <button className="ProductCard__button" onClick={() => addToCart(product)}>
          Add to basket
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
