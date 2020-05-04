import React from 'react';
import './styles/HomePage.css';
import Logo from "../Assets/Logos_site/Logos__site_wShadow.png";
import WelcomingMessage from "../Components/WelcomingMessage";
import ScrollButton from "../Components/ScrollButton";

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div id="container" className="animated fadeInUp">
                    <img id="Logo" src={Logo} alt={"logo"}/>
                    <WelcomingMessage/>
            </div>
        )
    }
}
