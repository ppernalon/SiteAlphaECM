import React from 'react';
import './styles/HomePage.css';
import HomePage_data from "../content/WelcomingMessage_data";
import WelcomingMessage from "../Components/WelcomingMessage";
import ScrollButton from "../Components/ScrollButton";

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div id="container" className="animated fadeInUp">
                    <img id="Logo" src={HomePage_data.logo} alt={"logo"}/>
                    <WelcomingMessage data={HomePage_data.welcomingWord}/>
                    <ScrollButton title="Marseille" to="/marseille" />
            </div>
        )
    }
}
