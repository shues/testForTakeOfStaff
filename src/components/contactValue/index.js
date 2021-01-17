import { React } from "react";
import "./index.css";

export function ContactValue(props) {
  function changeValue(e) {
    // console.log(e.target.value);
    const value = e.target.value;
    props.change(value);
  }

  function listenEnter(e) {
    let key = e.keyCode;
    if (key === 13 || key === 9) {
      props.save();
    }
  }

  if (props.mode === "normal") {
    if (props.type === "site") {
      return (
        <a href={props.value} target="_blanc" className="contValue">
          {props.value}
        </a>
      );
    }
    return <span className="contValue">{props.value}</span>;
  }
  return (
    <input
      type="text"
      value={props.value}
      onChange={changeValue}
      onKeyDown={listenEnter}
      autoFocus
    />
  );
}
