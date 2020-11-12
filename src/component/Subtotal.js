import React from "react";
import "../styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function Subtotal({ basket }) {
  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a small gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed To Checkout
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
  };
};

export default connect(mapStateToProps, null)(Subtotal);
