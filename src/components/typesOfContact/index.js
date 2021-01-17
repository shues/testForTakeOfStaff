import { React } from "react";
import "./index.css";

export function TypesOfContact(props) {
  const typesField = {
    email: "📧",
    postAddress: "📫",
    site: "🌍",
    phone: "☎",
  };

  function changeType(e) {
      const type = e.target.value;
      props.change(type);
  }

  if (props.mode === "normal") {
    return <span className="contType"> {typesField[props.type]}</span>;
  }

  const optionSet = Object.keys(typesField).map(function (el, i) {
      return <option value={el} key={i}>{typesField[el]}</option>;
  })

  return <select onChange={changeType} defaultValue={props.type} className="contType">{optionSet}</select>;
}
