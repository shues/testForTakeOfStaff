import React from "react";
import "./index.css";

export function AddContact(props) {
  function createNewContact() {
    console.log(props);
    let profile = props.profile;
    
    props.setProfile(profile);
    props.setUpdate(true);
    // document.querySelector("#contactValue").value = "";
    props.setChangeContValue('');
  }

  function listenKeys(e) {
    if (e.keyCode === 13 || e.keyCode === 9) {
      createNewContact();
    }
  }

  function changeContValue(e){
    props.setChangeContValue(e.target.value);
  }

  return (
    <div className="addContact">
      <select id="contactType">
        <option value="email">📧</option>
        <option value="postAddress">📫</option>
        <option value="site">🌍</option>
        <option value="phone">☎</option>
      </select>

      <input
        id="contactValue"
        type="text"
        onKeyDown={listenKeys}
        onChange={changeContValue}
        value={props.contValue}
      />
      <button onClick={createNewContact}>{props.mode}</button>
    </div>
  );
}
