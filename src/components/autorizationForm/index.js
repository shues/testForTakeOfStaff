import React from "react";
import "./index.css";

import { LoginForm } from "../loginForm";
import { PasswordForm } from "../passwordForm";

export function AutorizationForm(props) {
  const [trueLogin, setTrueLogin] = React.useState(false);
  const [login, setLogin] = React.useState("");
  // const [truePassword, setTruePassword] = React.useState(false);

  let conteiner = (
    <LoginForm setTrueLogin={setTrueLogin} setLogin={setLogin} />
  );
  if (trueLogin) {
    conteiner = (
      <PasswordForm
        name={login}
        // setTruePassword={setTruePassword}
        setTrueLogin={setTrueLogin}
        setToken={props.setToken}
      />
    );
  }

  return (
    <div className="autorizationForm">
      <h2>Welcome</h2>
      {conteiner}
    </div>
  );
}
