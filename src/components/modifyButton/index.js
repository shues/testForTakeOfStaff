import { React } from "react";
import "./index.css";

export function ModifyButton(props) {
  const types = {
    normal: "🖊",
    change: "💾",
  };
  return <button onClick={props.change} className="modifyButton">{types[props.mode]}</button>;
}
