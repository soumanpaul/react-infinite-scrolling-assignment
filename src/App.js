import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Login from "./components/Login";

export default function App() {
  const [logedIn, setLogedIn] = useState(false);
  useEffect(() => {
    let isLogin = sessionStorage.getItem("isLogin");
    if (isLogin) {
      setLogedIn(true);
    }
  }, []);

  const handleLogin = () => {
    sessionStorage.setItem("isLogin", true);
    setLogedIn(true);
  };
  const handleLogout = () => {
    sessionStorage.removeItem("isLogin");
    setLogedIn(false);
  };

  return (
    <div>
      {!logedIn ? (
        <Login handleLogin={() => handleLogin()} />
      ) : (
        <>
          <Header handleLogout={() => handleLogout()} />
          <Dashboard />{" "}
        </>
      )}
    </div>
  );
}
