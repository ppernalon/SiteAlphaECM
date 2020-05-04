import React from 'react';
import './styles/HomePage.css';
import Logo from "../Assets/Logos_site/Logos__site_wShadow.png";
import WelcomingMessage from "../Components/WelcomingMessage";

export default class SplashPage extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div id="container">
                <img id="Logo" src={Logo} alt={"logo"}/>
                <p>Chargement...</p>
            </div>
        )
    }
}
