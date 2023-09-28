import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.scss";
import signUp from "./assets/images/illustration-sign-up-desktop.svg";
import signUpMobile from "./assets/images/illustration-sign-up-mobile.svg";
import iconList from "./assets/images/icon-list.svg";
import Success from "./success";

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const [addressControl, setAddressControl] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    newEmail.trim() === "" ? setAddressControl(false) : setAddressControl(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    email.trim() === "" ? console.log("n") : navigate("/success");
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/success" element={<Success email={email} />} />
        <Route
          path="/"
          element={
            <motion.div
              className="box"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <div className="left">
                <h1>Stay updated!</h1>
                <p>
                  Join 60,000+ product managers receiving monthly updates on:
                </p>
                <ul>
                  <li>
                    <img src={iconList} alt="iconList" />
                    Product disovery and building what matters
                  </li>
                  <li>
                    <img src={iconList} alt="iconList" />
                    Measuring to ensure updates are a success
                  </li>
                  <li>
                    <img src={iconList} alt="iconList" />
                    And much more!
                  </li>
                </ul>
                <form>
                  <label>
                    <div className="wrap">
                      <h2>Email address</h2>{" "}
                      {email ? null : (
                        <p className="error-message">Valid email required</p>
                      )}
                    </div>
                    <input
                      type="text"
                      placeholder="email@company.com"
                      value={email}
                      onChange={handleEmailChange}
                      className={email.trim() ? "" : "errorBorder"}
                    />
                  </label>
                </form>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className={`${email.trim() === "" ? "" : "submitCheck"}`}
                >
                  Subscribe to monthly newsletter
                </button>
              </div>
              <div className="right">
                <img src={signUp} alt="desktopImg" className="desktopImg" />
                <img
                  src={signUpMobile}
                  alt="signUpMobile"
                  className="signUpMobile"
                />
              </div>
            </motion.div>
          }
        />
      </Routes>
    </div>
  );
}
