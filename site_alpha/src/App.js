import React from 'react';
import './App.css';
import './animate.css';
import NavigatorRouter from "./Components/NavigatorRouter";
import {
    BrowserRouter as Router
} from "react-router-dom";



function App() {
  return (
    <Router>
        <div className="App">
            <NavigatorRouter/>
        </div>
    </Router>
  );
}

export default App;
