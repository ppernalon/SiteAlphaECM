import React from 'react';
import WelcomingMessage from '../Components/WelcomingMessage'
import logo from "../logo.svg";
import data from '../content/HomePage.json';


export default class HomePage extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="page" style={{backgroundImage: "none"}}>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Page d'Accueil</p>
            </div>
        )
    }
}
