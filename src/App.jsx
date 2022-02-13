import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./Components/HeaderBlock/HeaderComponent";
import Home from "./Components/SliderComponent/Home";
import SingleProduct from "./Components/Pages/SingleProduct";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";
import Check from "./CheckOut/Check";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Payment from "./Components/Pages/Payment";

const promise = loadStripe(
  "pk_test_51KDk7SSFfqhhbemExyeUYJuPbVKu0hu2WyFQuR6c7M3XNmYxQpq18fwYtNmSLBCHjmWBZ7nT932dZBbqBWeP5dRt00qvRRkvl7"
);

const App = () => {
  return (
    <section>
      <article>
        <Router>
          <header>
            <HeaderComponent />
            <ToastContainer />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/checkout" element={<Check />} />
              <Route
                path="/payment"
                element={
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>
                }
              />
            </Routes>
          </main>
          <footer></footer>
        </Router>
      </article>
    </section>
  );
};

export default App;
