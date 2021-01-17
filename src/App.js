import React from 'react';
import './App.css';
import {AutorizationForm} from './components/autorizationForm';
import {Profile} from './components/profile';

function App() {
  // const [profile, setProfile] = React.useState({});
  const [token, setToken] = React.useState('');
  
  let conteiner = <AutorizationForm setToken={setToken}/>;
  
  if(token !== ''){
    conteiner = <Profile token={token} setToken={setToken}/>;
  }
  
  return (
    <div className="App">
      {conteiner}
    </div>
  );
}

export default App;
