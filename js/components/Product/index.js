import React, { useContext } from "react";
import coinsImg from "../../../assets/coins.png";
import Context from "../../store/Context";
import joyBackgroundImg from "../../../assets/controller.png";

export default function Product({ addProductToCart, ...props }) {
  const context = useContext(Context);

  const checkQuantityOfArray = context.carts.filter((p) => p.product.id === props.id);
  if (checkQuantityOfArray[0]) {
    if (checkQuantityOfArray[0].quantity === props.stock) {
      return (
        <div>
          <div className="card  ">
            <div className="card_emty">
              <div className="card_picture">
                <img className="game_thumb" src={props.image} />
                <div className="divider">
                  <div className="card_desc">
                    <h3>{props.name}</h3>
                    <div className="text">{props.description}</div>
                    <div className="price">
                      <img src={coinsImg} alt="coin" />
                      {props.price} Gil
                    </div>
                  </div>
                  <button>Add to Basket</button>
                </div>
              </div>
            </div>
            <img className="joyBackgroundImg" src={joyBackgroundImg} alt="joy" />
          </div>
        </div>
      );
    }
  }
  return (
    <div>
      <div className="card">
        <div className="card_picture">
          <img className="game_thumb" src={props.image} />
          <div className="divider">
            <div className="card_desc">
              <h3>{props.name}</h3>
              <div className="text">{props.description}</div>
              <div className="price">
                <div></div>
                <img src={coinsImg} alt="" />
                {props.price} Gil
              </div>
            </div>
            <button onClick={() => addProductToCart({ ...props })}>Add to Basket</button>
          </div>
        </div>
        <img className="joyBackgroundImg" src={joyBackgroundImg} alt="joy" />
      </div>
    </div>
  );
}
