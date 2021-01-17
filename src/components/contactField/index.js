import React from "react";
import "./index.css";

import { DelButton } from "../delButton";
import { ModifyButton } from "../modifyButton";
import { TypesOfContact } from "../typesOfContact";
import { ContactValue } from "../contactValue";

export function ContactField(props) {
  const value = props.contact.value;
  const type = props.contact.type;
  const search = props.search;

  const [mode, setMode] = React.useState("normal");

  React.useEffect(function () {
    if (value.indexOf(search) === -1) {
      setMode("hide");
    }else{
      setMode("normal");
    }
  },[search]);

  React.useEffect(
    function () {
      if (value === "") {
        setMode("change");
      };
    },
    [value]
  );

  function updateMode() {
    if (mode === "normal") {
      setMode("change");
      return;
    }
    setMode("normal");
  }

  function updateType(type) {
    const id = props.id;
    props.update(id, type, value);
  }

  function updateValue(value) {
    const id = props.id;
    console.log(value);
    props.update(id, type, value);
  }
  if (mode ==="hide") {
    return null;
  }
  return (
    <div className="contactField">
      <DelButton mode={mode} del={props.del} id={props.id} />
      <ModifyButton mode={mode} change={updateMode} />
      <TypesOfContact mode={mode} type={type} change={updateType} />
      <ContactValue
        mode={mode}
        value={value}
        type={type}
        change={updateValue}
        save={updateMode}
      />
    </div>
  );
}
