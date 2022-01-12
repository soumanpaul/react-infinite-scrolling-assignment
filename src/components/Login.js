import React, { useState } from "react";
import "../Login.css";
export default function Login(props) {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [iserror, setIserror] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (name === "foo" && pass == "bar") {
      props.handleLogin();
      setIserror(false);
    } else setIserror(true);

    setIsLoading(false);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };

  return (
    <div class="login-page">
      <div class="form">
        <div class="login">
          <div class="login-header">
            <h3>LOGIN</h3>
            <p>Please enter credentials (foo and bar) to login.</p>
            <p className="warning-msg">
              {iserror ? `Wrong username or password` : ""}
            </p>
          </div>
        </div>
        <form class="login-form">
          <input
            type="text"
            value={name}
            onChange={(e) => handleName(e)}
            placeholder="username"
          />
          <input
            type="password"
            value={pass}
            onChange={(e) => handlePass(e)}
            placeholder="password"
          />
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            <button onClick={(e) => handleSubmit(e)}>login</button>
          )}
        </form>
      </div>
    </div>
  );
}
