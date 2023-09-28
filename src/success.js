import React from "react";
import "./success.scss";
import icon from "./assets/images/icon-success.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Success({ email }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <motion.div
      className="success"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="wrapper">
        <img src={icon} alt="icon" />

        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <span> {email}</span> Please
          open it and click the button inside to confirm your subscription
        </p>
        <button onClick={handleClick}>Dismiss message</button>
      </div>
    </motion.div>
  );
}
