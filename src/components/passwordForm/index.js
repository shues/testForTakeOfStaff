import React from 'react';
import './index.css';

export function PasswordForm(props){
  
  function sendPassword(e){
    if(e.keyCode === 13 || e.keyCode === 9){
      // fetch("http://apiserver.my/takeOfStaffAutorization.php?password=" + e.target.value + "&name=" + props.name)
      fetch("https://testcadexchange.000webhostapp.com/takeOfStaffAutorization.php?password=" + e.target.value + "&name=" + props.name)
      .then(function(res){
        return res.json();
      })
      .then(function(res){
        console.log(res);
        if(res.res){
          props.setToken(res.token);
        }else{
          props.setTrueLogin(false); 
        }
      })
      .catch(function(e){
        console.log("Error " + e);
      });
    }
  }
  
  return(
    <div className="passwordForm">
      <b>Input your password:</b>
      <input type="password" placeholder="password" onKeyDown={sendPassword} autoFocus/>
    </div>
  );
}