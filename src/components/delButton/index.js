import { React } from "react";
import "./index.css";

export function DelButton(props) {
  function removeContact() {
    props.del(props.id);
  }
  if (props.mode === "normal") {
    return <button onClick={removeContact} className="delButton">❌</button>;
  }
  return <button onClick={removeContact} disabled className="delButton disabled">❌</button>;
  
}
