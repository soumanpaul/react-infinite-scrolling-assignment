import React from "react";
import "../App.css";

export default function Header(props) {
  return (
    <div class="topnav">
      <a class="active" href="#home">
        Infinite scrolling list in react
      </a>

      <div class="topnav-right">
        <a href="logout" onClick={props.handleLogout}>
          Logout
        </a>
      </div>
    </div>
  );
}
