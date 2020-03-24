import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigator from './Components/Navigator';
import PopUp from './Components/PopUp';
import BDE from './content/BDE'

function App() {
  return (
    <div className="App">
        <Navigator/>
        <PopUp title="Pôle vie de l'élève" pole="vde" name="Bureau des Elèves" logo={logo} message={BDE["message "]}/>
    </div>
  );
}

export default App;
