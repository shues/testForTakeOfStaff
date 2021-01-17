import React from "react";
import "./index.css";

export function LoginForm(props) {
  function sendLogin(e) {
    if (e.keyCode === 13 || e.keyCode === 9) {
      fetch(
        // "http://apiserver.my/takeOfStaffAutorization.php?login=" +
        "https://testcadexchange.000webhostapp.com/takeOfStaffAutorization.php?login=" +
          e.target.value
      )
        .then(function (res) {
          return res.text();
        })
        .then(function (res) {
          if (res === "true") {
            props.setTrueLogin(true);
            props.setLogin(e.target.value);
          } else {
            e.target.value = "";
          }
        })
        .catch(function (e) {
          console.log("Error " + e);
        });
    }
  }

  return (
    <div className="loginForm">
      <b>Input your login:</b>
      <input
        id="loginInput"
        type="text"
        placeholder="login"
        onKeyDown={sendLogin}
        autoFocus
      />
    </div>
  );
}
