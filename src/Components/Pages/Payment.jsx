import React, { Fragment } from "react";
import { useSelector, useDispacth } from "react-redux";
import CurrencyFormat from "react-currency-format";
import CheckOut from "./../../CheckOut/CheckOut";

import { GetBasketTotal } from "./../../CheckOut/GetBasketTotal";
import { Link, useHistory } from "react-router-dom";
import { db } from "../../firebase";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Payment = () => {
  const { basket, user } = useSelector(state => state.basketReducer);
  const handleSubmit = e => {
    e.preventDefault();
  };
  let handleChange = e => {
    e.preventDefault();
  };
  return (
    <div>
      <div>
        <h1>Checkout{<Link to={"/checkout"}>{basket.length}items</Link>}</h1>
        <div>
          <h3>Delivery Address</h3>
        </div>

        <div>
          <p>{user && user.email}</p>
          <p>House No: 1, Near Chatrapati shivaji Maharaj Nagar </p>
          <p>Mumbai,India</p>
        </div>
      </div>

      <div>
        <div>
          <h3>Review items and delivery</h3>
        </div>

        <div>
          {basket &&
            basket.map(item => (
              <CheckOut
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
        </div>
      </div>

      <div>
        <div>
          <h3>Payment Method</h3>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <CardElement onChange={handleChange} />
              <CurrencyFormat
                renderText={value => (
                  <Fragment>
                    <h3>Order Total: {value}</h3>
                  </Fragment>
                )}
                decimalScale={2}
                value={GetBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rs"}
              />
              <button>
                <span>Buy Now</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
