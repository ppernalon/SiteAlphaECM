import React from 'react';
import WelcomingMessage from '../Components/WelcomingMessage'
<<<<<<< Updated upstream:site_alpha/Pages/HomePage.jsx
=======
import logo from "../logo.svg";
import data from '../content/HomePage.json';
>>>>>>> Stashed changes:site_alpha/src/Pages/HomePage.jsx

export default class AlphaButton extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
<<<<<<< Updated upstream:site_alpha/Pages/HomePage.jsx
            <div>
                <WelcomingMessage message={this.state.message} authors={this.state.authors}/>
=======
            <div className="page">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{data.title}</p>
            </header>
>>>>>>> Stashed changes:site_alpha/src/Pages/HomePage.jsx
            </div>
        )
    }
}
