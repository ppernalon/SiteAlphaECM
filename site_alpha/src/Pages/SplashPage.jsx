import React from 'react';
import './styles/HomePage.css';
import HomePage_data from "../content/WelcomingMessage_data";
import WelcomingMessage from "../Components/WelcomingMessage";

export default class SplashPage extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div id="container">
                <img id="Logo" src={HomePage_data.logo} alt={"logo"}/>
                <p>Chargement...</p>
            </div>
        )
    }

}
