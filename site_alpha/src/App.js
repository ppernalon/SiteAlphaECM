import React from 'react';
import './App.css';
import './animate.css';
import NavigatorRouter from "./Components/NavigatorRouter";
import NavigatorRouterV2 from "./Components/NavigatorRouterV2";

import {
    BrowserRouter as Router
} from "react-router-dom";



function App() {
  return (
    <Router>
        <div className="App">
            <NavigatorRouterV2/>
        </div>
    </Router>
  );
}

export default App;
