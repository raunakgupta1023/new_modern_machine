import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../common/Reducer";
import { useStateValue } from "../../common/StateProvider";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal for {basket.length} item(s): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix="&#8377;"
      />
      <button>Procees to Checkout</button>
    </div>
  );
};

export default Subtotal;
