import React from 'react';
import './App.css';
import './animate.css';
import NavigatorRouter from "./Components/NavigatorRouter";
import NavigatorRouterV2 from "./Components/NavigatorRouterV2";
import { loadReCaptcha } from 'react-recaptcha-google'

import {
    BrowserRouter as Router
} from "react-router-dom";



function App() {
    loadReCaptcha();
  return (
    <Router>
        <div className="App">
            <NavigatorRouterV2/>
        </div>
    </Router>
  );
}

export default App;
