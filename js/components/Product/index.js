import React, { useState, useContext } from "react";
import coinsImg from "/Users/durcak/Desktop/react-trial-master-99bbffd7a46731b7dc702522f430b2ad715edc9f/assets/coins.png";
import Context from "../../store/Context";
import joyBackgroundImg from "/Users/durcak/Desktop/react-trial-master-99bbffd7a46731b7dc702522f430b2ad715edc9f/assets/controller.png";

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
    <div>
      <div className="card">
        {/* <div onClick={() => addProductToCart({ ...props })}></div> */}

        <div className="card_picture">
          <img className="game_thumb" src={props.image} />
          <div className="divider">
            {/* make other flex column */}
            <div className="card_desc">
              <h3>{props.name}</h3>
              <div className="text">{props.description}</div>
              <div className="price">
                <img src={coinsImg} alt="" />
                {props.price} Gil
              </div>
            </div>
            {/* other opne */}
            <button>Add to Basket</button>
          </div>
        </div>
        <img className="joyBackgroundImg" src={joyBackgroundImg} alt="joy" />
      </div>
    </div>
  );
}
