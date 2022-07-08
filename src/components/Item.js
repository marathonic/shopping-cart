import React from "react";

const Item = (props) => {
  const { thumbnail, name, price, stock, added, id } = props;

  const [isInCart, setisInCart] = React.useState(false);
  const [count, setCount] = React.useState(1);

  const toggleisInCart = () => {
    setisInCart(!isInCart);
  };

  const increaseQuantity = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseQuantity = () => {
    setCount((prevCount) => (prevCount === 1 ? 1 : prevCount - 1));
  };

  const countDisplay = () => {
    return (
      <div className="countDisplay-container">
        <div className="countDisplay-minus" onClick={decreaseQuantity}>
          -
        </div>
        <div className="countDisplay-number"> {count} </div>
        <div className="countDisplay-plus" onClick={increaseQuantity}>
          +
        </div>
      </div>
    );
  };

  const addToCartButton = () => {
    return (
      <div>
        <button onClick={toggleisInCart}>Add to cart</button>
      </div>
    );
  };

  return (
    <div className="item-card">
      <img src={thumbnail} alt="product" className="item-thumbnail" />
      <div className="item-info">
        <div>
          <span>{name}</span>
        </div>
        <div className="item-price">
          <span> $ {price}</span>
          {isInCart ? countDisplay() : addToCartButton()}
        </div>
      </div>
    </div>
  );
};

export default Item;
