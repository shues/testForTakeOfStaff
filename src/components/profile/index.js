import React from "react";
import "./index.css";

import { SearchForm } from "../searchForm";
import { ContactField } from "../contactField";

export function Profile(props) {
  // console.log(props);

  const [loaded, setLoaded] = React.useState(false);
  const [update, setUpdate] = React.useState(false);
  const [profileName, setProfileName] = React.useState("");
  const [contacts, setContacts] = React.useState([]);
  const [searchString, setSearchString] = React.useState("");

  React.useEffect(
    function () {
      console.log("effect");
      if (!loaded) {
        loadProfile();
      }
    },
    [profileName]
  );

  React.useEffect(
    function () {
      console.log("update effect");
      if (update) {
        setUpdate(false);
      }
    },
    [update]
  );

  function loadProfile() {
    console.log("loading");
    // fetch("http://apiserver.my/takeOfStaffGetProfile.php?token=" + props.token)
    fetch("https://testcadexchange.000webhostapp.com/takeOfStaffGetProfile.php?token=" + props.token)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        console.log(res);
        setLoaded(true);
        setProfileName(res.name);
        setContacts(res.contacts);
      })
      .catch();
  }

  function addContact() {
    const emptyContact = { type: "email", value: "" };
    let cont = contacts;
    cont.push(emptyContact);
    setContacts(cont);
    setUpdate(true);
  }

  function delContact(id) {
    console.log(id + " deleted");
    let cont = contacts;
    cont.splice(id, 1);
    setContacts(cont);
    console.log(contacts);
    setUpdate(true);
  }

  function updateContact(id, type, value) {
    let cont = contacts;
    cont[id].type = type;
    cont[id].value = value;
    setContacts(cont);
    setUpdate(true);
  }

  function exit() {
    
  }

  console.log("render");
  if (loaded && profileName.length > 0) {
    console.log("Not empty");
    const contactList = contacts.map(function (el, i) {
      return (
        <ContactField
          contact={el}
          key={i}
          id={i}
          del={delContact}
          update={updateContact}
          search={searchString}
        />
      );
    });
    return (
      <div className="profile">
        <span className="exitButton" onClick={function(){props.setToken('')}}>exit</span>
        <h2>Personal account of user "{profileName}"</h2>
        <SearchForm value={searchString} search={setSearchString} />
        <div className="contactsList">
          <h2>contacts list:</h2>
          {contactList}
          <button onClick={addContact}>Add contact</button>
        </div>
      </div>
    );
  }
  console.log("empty");
  return <h2>profile loading </h2>;
}
