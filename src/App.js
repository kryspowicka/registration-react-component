import React, { useState } from "react";
import "./App.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faEye } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isValid, setIsValid] = useState(false);
  const [isValidPass, setIsValidPass] = useState(false);
  const [message, setMessage] = useState("");
  const [messagePass, setMessagePass] = useState("");
  const [showPass, setShowPass] = useState(false);

  const emailRegex = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const passwordRegex = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

  const validateEmail = (event) => {
    const email = event.target.value;

    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage("Email is correct!");
    } else {
      setIsValid(false);
      setMessage("Please enter a valid email!");
    }
  };

  const validatePassword = (event) => {
    const password = event.target.value;

    if (passwordRegex.test(password)) {
      setIsValidPass(true);
      setMessagePass("Password is valid!");
    } else {
      setIsValidPass(false);
      setMessagePass("Please enter a valid password!");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <h1 className="title">Registration</h1>
          <h3 className="title">Email</h3>
          <span>
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
              onChange={validateEmail}
            />

            <div className={`message ${isValid ? "success" : "error"}`}>
              {message}
            </div>
          </span>

          <h3 className="title-password">Password</h3>
          <span>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter your password"
              className="password-input"
              onChange={validatePassword}
            />

            <button
              className="show-password-btn"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </span>
          <div className={`password ${isValidPass ? "success" : "error"}`}>
            {messagePass}
          </div>
          <button className="register-btn">Register</button>
        </div>
      </header>
    </div>
  );
}

export default App;

//<FontAwesomeIcon icon={faEye} color="green" />
