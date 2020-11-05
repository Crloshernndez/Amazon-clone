import React from "react";
import "../styles/Product.css";
import { connect } from "react-redux";
import { addToBasket } from "../action";

function Product(props) {
  const { title, image, price, rating, id, basket } = props;

  const addTotheBasket = () => {
    props.addToBasket({
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={addTotheBasket}>Add To Basket</button>
    </div>
  );
}

const mapDispatchToProps = {
  addToBasket,
};

export default connect(null, mapDispatchToProps)(Product);
