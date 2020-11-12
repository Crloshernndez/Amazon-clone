import React from "react";
import "../styles/CheckoutProduct.css";
import { connect } from "react-redux";
import { removeFromBasket } from "../action";

function CheckoutProduct(props) {
  const { title, image, price, rating, id } = props;

  const handleRemoveFromBasket = () => props.removeFromBasket(id);

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={handleRemoveFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  removeFromBasket,
};

export default connect(null, mapDispatchToProps)(CheckoutProduct);
